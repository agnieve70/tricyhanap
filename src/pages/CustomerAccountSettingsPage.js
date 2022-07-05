import React from 'react'
import CustomerNavbar from '../components/CustomerNavbar';
import CustomerSidebar from '../components/CustomerSidebar';

function CustomerAccountSettingsPage() {
  return (
    <div>
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container mt-3">
        <h4>Account Settings</h4>
        <form>
          <div className="form-group mb-2">
            <label for="email" className="form-label">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
            />
          </div>
          <div className="form-group mb-2">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
            />
          </div>
          <div className="form-group mb-2">
            <label for="password_confirmation" className="form-label">
              Password Confirmation
            </label>
            <input
              type="password"
              className="form-control"
              name="password_confirmation"
              id="password_confirmation"
            />
          </div>
          <button type="submit" className='btn btn-primary'>Update Settings</button>
        </form>
      </div>
    </div>
  );
}

export default CustomerAccountSettingsPage