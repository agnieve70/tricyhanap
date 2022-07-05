import React from 'react'
import DriverSidebar from "../components/DriverSidebar";
import DriverNavbar from "../components/DriverNavbar";
import DriverCustomers from '../components/DriverCustomers';

function DriverDashboardPage() {
  return (
    <div>
      <DriverNavbar />
      <DriverSidebar />
      <DriverCustomers />
    </div>
  );
}

export default DriverDashboardPage