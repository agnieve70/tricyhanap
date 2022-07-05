import React from 'react'
import OffCanvas from "../ui/OffCanvas";
import { Link } from "react-router-dom";

function CustomerSidebar() {
  return (
    <OffCanvas
      header={
        <>
          <h5 className="offcanvas-title">TricyHanap</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </>
      }
      body={
        <div className="container bg-default p-2">
          <div className="row mb-4">
            <div className="col-2">
              <img
                src="/logo.png"
                className="rounded-circle"
                alt="avatar"
                width={55}
                height={55}
                style={{ backgroundColor: "#D3D3D3" }}
              />
            </div>
            <div className="col-10">
              <h1 className="mt-2">Rachel Pulvera</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div class="list-group">
                <Link
                  to="/customer-dashboard"
                  class="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-search"></i> Find Vehicle
                </Link>
                <Link
                  to="/customer-transaction"
                  class="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-history"></i> Transaction History
                </Link>
                <Link
                  to="/customer-complaints"
                  class="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-edit"></i> My Compaints
                </Link>
                <Link
                  to="/customer-points"
                  class="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-coins"></i> Points
                </Link>
                <Link
                  to="/customer-account-settings"
                  class="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-cog"></i> Account Settings
                </Link>
                <Link
                  to="/customer-subscription"
                  class="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-envelope"></i> Subscription
                </Link>
                <Link
                  to="/"
                  class="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-sign-out"></i> Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default CustomerSidebar