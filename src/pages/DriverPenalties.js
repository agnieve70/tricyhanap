import React from "react";
import DriverNavbar from "../components/DriverNavbar";
import DriverSidebar from "../components/DriverSidebar";
import Card from "../ui/Card";

function DriverPenalties() {
  return (
    <div>
      <DriverNavbar />
      <DriverSidebar />
      <div className="container mt-4">
        <h4>Complaints Against You</h4>
        <Card
          cardBodyClass={"bg-danger text-light rounded-3 mb-3"}
          body={
            <>
              <h4>February 24, 2022</h4>
              <p>Rude Driver</p>
              <p>-5</p>
            </>
          }
        />
        <Card
          cardBodyClass={"bg-danger text-light rounded-3 mb-3"}
          body={
            <>
              <h4>February 25, 2022</h4>
              <p>Driving Drunk</p>
              <p>-10</p>
            </>
          }
        />
      </div>
    </div>
  );
}

export default DriverPenalties;
