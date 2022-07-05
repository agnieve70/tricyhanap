import React from "react";
import DriverNavbar from "../components/DriverNavbar";
import DriverSidebar from "../components/DriverSidebar";
import Card from "../ui/Card";

function DriverComplaints() {
  return (
    <div>
      <DriverNavbar />
      <DriverSidebar />
      <div className="container mt-4">
        <h4>Complaints History</h4>
        <Card
          cardBodyClass={"bg-danger text-light rounded-3 mb-3"}
          body={
            <>
              <h4>February 24, 2022</h4>
              <p>Rude Customer</p>
            </>
          }
        />
        <Card
          cardBodyClass={"bg-danger text-light rounded-3 mb-3"}
          body={
            <>
              <h4>February 25, 2022</h4>
              <p>Did not pay exact amount</p>
            </>
          }
        />
      </div>
    </div>
  );
}

export default DriverComplaints;
