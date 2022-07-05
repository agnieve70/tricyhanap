import React from 'react'

function CustomerNavbar() {
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
        <h4 className="text-light">TricyHanap</h4>
      </div>
    </nav>
  );
}

export default CustomerNavbar