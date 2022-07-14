import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './img/background.jpg';
import styles from './HomePage.module.css';

let isMobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
}


function HomePage() {

  useEffect(() => {
    if(isMobile === false){
      window.location.href="/login"
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo_box}>
        <img className={styles.header__logo} src="./logo1.png" alt="logo" />
      </div>
      <div className={styles.header__text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_primary__main}>TricyHanap</span>
          <span className={styles.heading_primary__sub}>MOBILE APP</span>
        </h1>
        <Link
          to="/login"
          id={styles.btn_get_started}
          className="btn btn-light rounded-pill px-4 py-2"
        >
          GET STARTED
        </Link>
      </div>
    </header>
  );
}

export default HomePage