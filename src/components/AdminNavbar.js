import React from 'react'

function AdminNavbar() {

    function logoutHandler(){
        localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href='/login';
    }
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a
          className="navbar-brand"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <img src="/logo.png" alt="" width="45" />
        </a>
        <button className="btn btn-primary" onClick={logoutHandler}>Logout</button>
      </div>
    </nav>
  );
}

export default AdminNavbar