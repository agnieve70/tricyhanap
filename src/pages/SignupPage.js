import React from 'react'
import { Link } from "react-router-dom";
import "./img/background.jpg";
import styles from "./SignupPage.module.css";

function SignupPage() {
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
        <form className="signup-form">
          <div className="form-group">
            <label for="firstname" className="form-label text-light">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              id="firstname"
            />
          </div>
          <div className="form-group">
            <label for="lastname" className="form-label text-light">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="lastname"
            />
          </div>
          <div className="form-group">
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
          <div className="form-group">
            <label for="password_confirmation" className="form-label text-light">
              Password Confirmation
            </label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              id="password_confirmation"
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