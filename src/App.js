import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CustomerDashboardPage from "./pages/CustomerDashboardPage";
import CustomerTransactionPage from "./pages/CustomerTransactionPage";
import CustomerComplaints from "./pages/CustomerComplaints";
import DriverComplaints from "./pages/DriverComplaints";
import CustomerPointsPage from "./pages/CustomerPointsPage";
import CustomerAccountSettingsPage from "./pages/CustomerAccountSettingsPage";
import CustomerSubscriptionPage from "./pages/CustomerSubscriptionPage";
import SubscribePage from "./pages/SubscribePage";
import NotFoundPage from "./pages/NotFoundPage";
import DriverDashboardPage from "./pages/DriverDashboardPage";
import DriverSelectCustomerPage from "./pages/DriverSelectCustomerPage";
import DriverPenalties from "./pages/DriverPenalties";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminReports from "./pages/AdminReports";
import AdminDrivers from "./pages/AdminDrivers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/customer-dashboard" element={<CustomerDashboardPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/admin-drivers" element={<AdminDrivers />} />
        <Route path="/admin-reports" element={<AdminReports />} />
        <Route
          path="/customer-transaction"
          element={<CustomerTransactionPage />}
        />
        <Route
          path="/customer-complaints"
          element={<CustomerComplaints />}
        />
        <Route
          path="/driver-complaints"
          element={<DriverComplaints />}
        />
         <Route
          path="/driver-penalties"
          element={<DriverPenalties />}
        />
        <Route path="/customer-points" element={<CustomerPointsPage />} />
        <Route
          path="/customer-account-settings"
          element={<CustomerAccountSettingsPage />}
        />
        <Route path="/customer-subscription">
          <Route path="" element={<CustomerSubscriptionPage />} />
          <Route path=":type" element={<SubscribePage />} />
        </Route>
        <Route
          path="/driver-account-settings"
          element={<CustomerAccountSettingsPage />}
        />
        <Route path="/driver-dashboard">
          <Route path="" element={<DriverDashboardPage />} />
          <Route path=":id" element={<DriverSelectCustomerPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
