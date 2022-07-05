import React from 'react'
import { useParams } from "react-router-dom";
import styles from './SubscribePage.module.css';

function SubscribePage() {

    let { type } = useParams();
    console.log(type);
  return (
    <div className="container">
      <iframe
        src={
          type === "monthly"
            ? "https://invoice-staging.xendit.co/od/tricyhanap-monthly"
            : "https://invoice-staging.xendit.co/od/tricyhanap-yearly"
        }
        title="TricyHanap Subscription"
        className={styles.responsive_iframe}
      ></iframe>
    </div>
  );
}

export default SubscribePage