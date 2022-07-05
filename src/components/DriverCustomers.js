import React from 'react'
import { Link } from 'react-router-dom';
import Card from "../ui/Card";
import styles from "./CustomerPoints.module.css";

function DriverCustomers() {
  return (
    <div className="container mt-4">
      <h4>Customers</h4>
      <Card
        cardBodyClass={"bg-primary text-light rounded-3 mb-2"}
        body={
          <Link className={styles.a_redeem} to="/driver-dashboard/1">
            <h6>Customer Name1</h6>
            <small>Lim Street, Digos City, Davao del Sur</small>
          </Link>
        }
      />
      <Card
        cardBodyClass={"bg-primary text-light rounded-3 mb-2"}
        body={
          <Link className={styles.a_redeem} to="/driver-dashboard/1">
            <h6>Customer Name2</h6>
            <small>Lim Street, Digos City, Davao del Sur</small>
          </Link>
        }
      />
    </div>
  );
}

export default DriverCustomers