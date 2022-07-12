/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import OffCanvas from "../ui/OffCanvas";
import { Link } from "react-router-dom";

function CustomerSidebar() {

  function logoutHandler(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href='/login';
  }

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
                src="/avatar2.png"
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
              <div className="list-group">
                <Link
                  to="/customer-dashboard"
                  className="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-search"></i> Find Vehicle
                </Link>
                <Link
                  to="/customer-transaction"
                  className="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-history"></i> Transaction History
                </Link>
                <Link
                  to="/customer-complaints"
                  className="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-edit"></i> My Compaints
                </Link>
                <Link
                  to="/customer-points"
                  className="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-coins"></i> Points
                </Link>
                <Link
                  to="/customer-account-settings"
                  className="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-cog"></i> Account Settings
                </Link>
                <Link
                  to="/customer-subscription"
                  className="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-envelope"></i> Subscription
                </Link>
                <a
                  href="#"
                  onClick={logoutHandler}
                  className="list-group-item list-group-item-action my-1"
                >
                  <i className="fa fa-sign-out"></i> Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default CustomerSidebar