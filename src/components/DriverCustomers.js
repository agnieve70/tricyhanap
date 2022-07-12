import React from 'react'
import { Link } from 'react-router-dom';
import Card from "../ui/Card";
import styles from "./CustomerPoints.module.css";

function DriverCustomers() {
  return (
    <div className="container mt-4">
      <h4>Passengers</h4>
      <Card
        cardBodyClass={"bg-primary text-light rounded-3 mb-2"}
        body={
          <Link className={styles.a_redeem} to="/driver-dashboard/1">
            <h6><b>Passenger Name1</b></h6> 
            <small>From: <b>Lim Street, Digos City, Davao del Sur</b></small> <br />
            <small>To: <b>Lapu lapu Extention, Digos City, Davao del Sur</b></small> <br />
            <small>Fare: <b>Php 20.00</b></small> <br />
            <small>Date/Time: <b>05/13/2022 12:23:00</b></small> <br />
          </Link>
        }
      />
      <Card
        cardBodyClass={"bg-primary text-light rounded-3 mb-2"}
        body={
          <Link className={styles.a_redeem} to="/driver-dashboard/1">
            <h6><b>Passenger Name2</b></h6>
            <small>From: <b>Luna Street, Digos City, Davao del Sur</b></small> <br />
            <small>To: <b>Lim del Rosario St., Digos City, Davao del Sur</b></small> <br />
            <small>Fare: <b>Php 20.00</b></small> <br />
            <small>Date/Time: <b>05/13/2022 1:23:00</b></small> <br />
          </Link>
        }
      />
    </div>
  );
}

export default DriverCustomers