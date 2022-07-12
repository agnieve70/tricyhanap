import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./img/background.jpg";
import styles from "./SignupPage.module.css";


async function login(email, password) {

  const res = await fetch('https://tricyhanap-backend.herokuapp.com/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password
      }),
      headers: {
        "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
      throw new Error(data.message || "Something wnt wrong");
  }

  return data;
}
// localStorage.setItem("role", result.user.role);

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e){
    e.preventDefault();

    login(email, password).then((result) => {
      console.log(result);
      if(result){
        alert("Successfully Login");
        localStorage.setItem("auth_token", result.token);
        localStorage.setItem("role", result.user.role);

        if(result.user.role === 'passenger'){
          window.location.href='/customer-dashboard';
        }else if(result.user.role === 'driver'){
          window.location.href='/driver-dashboard';
        }else{
          window.location.href='/admin-dashboard';
        }
      }
    }).catch((error) => {
      console.log("ERROR: ", error);
      alert("Login Failed!");
    });
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__logo_box}>
        <center>
          <img
            className="text-center mt-5 mb-3"
            width={100}
            src="./logo1.png"
            alt="logo"
          />
        </center>
      </div>
      <div className="px-3">
        <h1 className="text-center text-light mb-3">PLEASE LOGIN</h1>
        <form className="signup-form" onSubmit={submitHandler}>
          <div className="form-group mb-2">
            <label forHtml="email" className="form-label text-light">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label forHtml="password" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="container mt-3">
            <div className="row">
              <button type="submit" className="btn btn-info text-light mb-2">
                Login Account
              </button>
            </div>
          </div>
          <p className="text-white mt-2">
            <span>You're not yet a Member?</span>
            <span>
              <Link to="/signup" className="text-light">
                {" "}
                Signup
              </Link>
            </span>
          </p>
        </form>
      </div>
    </header>
  );
}

export default LoginPage;
