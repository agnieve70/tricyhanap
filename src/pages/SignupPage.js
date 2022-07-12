import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./img/background.jpg";
import styles from "./SignupPage.module.css";


async function addUser(username, email, password, password_confirmation, role) {
  let bodyFormData = new FormData();
  bodyFormData.append("name", username);
  bodyFormData.append("email", email);
  bodyFormData.append("password", password);
  bodyFormData.append("password_confirmation", password_confirmation);
  bodyFormData.append("role", role);

  const res = await fetch('https://tricyhanap-backend.herokuapp.com/api/register', {
      method: 'POST',
      body: bodyFormData,
  });

  const data = await res.json();
  if (!res.ok) {
      throw new Error(data.message || "Something wnt wrong");
  }

  return data;
}

function SignupPage() {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPasswordConfirmation] = useState();
  const [role, setRole] = useState();


  function submitHandler(e){
    e.preventDefault();
    addUser(username, email, password, password_confirmation, role).then((result) => {
      if(result){
        alert("Registered Successfully!");
        window.location.href="/login";
      }
    }).catch((error)=> {
      alert("Registration Failed!");
      console.log("ERROR: ", error);
    })
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__logo_box}>
        <center>
          <img
            className="text-center mt-5"
            width={100}
            src="./logo1.png"
            alt="logo"
          />
        </center>
      </div>
      <div className="px-3">
        <h1 className="text-center text-light">REGISTRATION</h1>
        <form className="signup-form" onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="name" className="form-label text-light">
               Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={username} 
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
         
          <div className="form-group">
            <label htmlFor="email" className="form-label text-light">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role" className="form-label text-light">
              Role
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)} name="" id="role" className="form-control">
            <option value="" selected disabled>Select Role</option>
              <option value="driver">Driver</option>
              <option value="passenger">Passenger</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label text-light">
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
         
          <div className="form-group">
            <label htmlFor="password_confirmation" className="form-label text-light">
              Password Confirmation
            </label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              id="password_confirmation"
              value={password_confirmation}
              onChange={(e)=> setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className="container mt-3">
            <div className="row">
              <button type="submit" className="col-6 btn btn-info text-light">
                SIGN UP
              </button>
              <Link to='/' className="col-6 btn btn-dark text-light">
                CANCEL
              </Link>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}

export default SignupPage