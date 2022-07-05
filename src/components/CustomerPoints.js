import React from 'react'
import Card from '../ui/Card'
import styles from './CustomerPoints.module.css'

function CustomerPoints() {
  return (
    <div>
      <Card
        cardBodyClass={"bg-success text-light rounded-3 mb-3"}
        body={
          <a className={styles.a_redeem} href="#">
            <h6>10 Points for 1 Free Ride</h6>
          </a>
        }
      />
      <Card
        cardBodyClass={"bg-success text-light rounded-3 mb-3"}
        body={
          <a className={styles.a_redeem} href="#">
            <h6>20 Points for 2 Free Rides</h6>
          </a>
        }
      />
    </div>
  );
}

export default CustomerPoints