import React from "react";
import CustomerNavbar from "../components/CustomerNavbar";
import CustomerSidebar from "../components/CustomerSidebar";
import Card from "../ui/Card";

function CustomerTransactionPage() {
  return (
    <div>
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container mt-4">
        <h4>Transaction History</h4>
        <Card
          cardBodyClass={"bg-success text-light rounded-3 mb-3"}
          body={
            <>
              <h4>February 24, 2022</h4>
              <p>Php. 10.00</p>
            </>
          }
        />
        <Card
          cardBodyClass={"bg-success text-light rounded-3 mb-3"}
          body={
            <>
              <h4>February 25, 2022</h4>
              <p>Php. 10.00</p>
            </>
          }
        />
        <Card
          cardBodyClass={"bg-danger text-light rounded-3 mb-3"}
          body={
            <>
              <h4>February 25, 2022</h4>
              <p>Cancelled</p>
            </>
          }
        />
      </div>
    </div>
  );
}

export default CustomerTransactionPage;
