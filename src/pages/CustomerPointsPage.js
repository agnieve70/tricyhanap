import React from 'react'
import CustomerNavbar from '../components/CustomerNavbar';
import CustomerPoints from '../components/CustomerPoints';
import CustomerSidebar from '../components/CustomerSidebar';
import Card from '../ui/Card';

function CustomerPointsPage() {
  return (
    <div>
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container mt-4">
        <h4>Your Points</h4>
        <Card
          cardBodyClass={"bg-info text-light rounded-3 mb-3"}
          body={
            <>
              <h1>10 Points</h1>
              <small className="text-muted text-light">
                You can redeem your points for a free ride
              </small>
            </>
          }
        />
        <h4>Redeem Now</h4>

        <CustomerPoints />
      </div>
    </div>
  );
}

export default CustomerPointsPage