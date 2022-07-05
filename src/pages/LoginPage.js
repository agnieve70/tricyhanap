import React from "react";
import { Link } from "react-router-dom";
import "./img/background.jpg";
import styles from "./SignupPage.module.css";

function LoginPage() {
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
        <form className="signup-form">
          <div className="form-group mb-2">
            <label for="email" className="form-label text-light">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label for="password" className="form-label text-light">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
            />
          </div>

          <div className="container mt-3">
            <div className="row">
              {/* <button type="submit" className="btn btn-info text-light">
                LOGIN
              </button> */}
              <Link
                to="/customer-dashboard"
                className="btn btn-info text-light mb-2"
              >
                {" "}
                Login to Customer Dashboard
              </Link>
              <Link to="/driver-dashboard" className="btn btn-danger text-light">
                {" "}
                Login to Driver Dashboard
              </Link>
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
