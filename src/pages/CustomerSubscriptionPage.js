import React from 'react'
import { Link } from 'react-router-dom';
import CustomerNavbar from '../components/CustomerNavbar';
import CustomerSidebar from '../components/CustomerSidebar';
import Card from '../ui/Card';

function CustomerSubscriptionPage() {
  return (
    <div>
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container mt-4 ">
        <h4>Subscription</h4>
        <Link to="/customer-subscription/monthly">
          <Card
            cardBodyClass={"rounded-3 shadow p-3 bg-success mb-3"}
            body={
              <>
                <h4 className="text-light">Php. 480.00 /Month</h4>
                <p className="text-light">
                  You can earn points faster and could use the points to ride
                  free.
                </p>
              </>
            }
          />
        </Link>
        <Link to="/customer-subscription/yearly">
          <Card
            cardBodyClass={"rounded-3 shadow p-3 bg-warning"}
            body={
              <>
                <h4 className="text-light">Php. 1200.00 /Year</h4>
                <p className="text-light">
                  You can earn points faster and could use the points to ride
                  free.
                </p>
              </>
            }
          />
        </Link>
      </div>
    </div>
  );
}

export default CustomerSubscriptionPage