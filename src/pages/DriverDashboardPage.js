import React, { useEffect, useState } from 'react'
import DriverSidebar from "../components/DriverSidebar";
import DriverNavbar from "../components/DriverNavbar";
import DriverCustomers from '../components/DriverCustomers';

const auth_token = localStorage.getItem("auth_token");

async function getRequests() {

  const res = await fetch('https://tricyhanap-backend.herokuapp.com/api/request-pickup', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${auth_token}`,
    },
  });

  const data = await res.json();
  if (!res.ok) {
      throw new Error(data.message || "Something wnt wrong");
  }

  return data.data;
}

function DriverDashboardPage() {
  const [requests, setRequests] = useState([]);

  useEffect(()=> {
    getRequests().then((result) => {
      console.log(result);
      setRequests(result);
    })
  }, []);

  return (
    <div>
      <DriverNavbar />
      <DriverSidebar />
      <DriverCustomers items={requests} />
    </div>
  );
}

export default DriverDashboardPage