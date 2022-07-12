import React from "react";
import CustomerNavbar from "../components/CustomerNavbar";
import CustomerSidebar from "../components/CustomerSidebar";
import Card from "../ui/Card";

function CustomerTransactionPage() {
  return (
    <div className="mb-5">
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container mt-4">
        <h4>Transaction History</h4>
        <Card
          cardBodyClass={"bg-success text-light rounded-3 mb-3"}
          body={
            <>
              <h4>Driver 1</h4>
              <small>From: <b>Lim Street, Digos City, Davao del Sur</b></small> <br />
              <small>To: <b>Lapu lapu Extention, Digos City, Davao del Sur</b></small> <br />
              <small>Fare: <b>Php 20.00</b></small> <br />
              <small>Date/Time: <b>05/13/2022 12:23:00</b></small> <br />
            </>
          }
        />
        <Card
          cardBodyClass={"bg-success text-light rounded-3 mb-3"}
          body={
            <>
              <h4>Driver 2</h4>
              <small>From: <b>Luna Street, Digos City, Davao del Sur</b></small> <br />
              <small>To: <b>Lim del Rosario St., Digos City, Davao del Sur</b></small> <br />
              <small>Fare: <b>Php 20.00</b></small> <br />
              <small>Date/Time: <b>05/13/2022 1:23:00</b></small> <br />
            </>
          }
        />
        <Card
          cardBodyClass={"bg-danger text-light rounded-3 mb-3"}
          body={
            <>
              <h4>Driver 3</h4>
              <small>From: <b>Luna Street, Digos City, Davao del Sur</b></small> <br />
              <small>To: <b>Kiagot, Digos City, Davao del Sur</b></small> <br />
              <small>Fare: <b>Php 20.00</b></small> <br />
              <small>Date/Time: <b>05/15/2022 3:23:00</b></small> <br />
            </>
          }
        />
      </div>
    </div>
  );
}

export default CustomerTransactionPage;
