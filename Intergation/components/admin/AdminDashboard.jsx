
import React from 'react';
import './AdminDashboard.css';
import AddBoat from '../addboat/AddBoat';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
      <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="admin-stats">
        <div className="stat-card">
          <h2>Total Users</h2>
          {/* <p>120</p> */}
        </div>
        <div className="stat-card">
          <h2>Total Bookings</h2>
          {/* <p>85</p> */}
        </div>
        <div className="stat-card">
          <h2>Total Revenue</h2>
          {/* <p>$10,000</p> */}
        </div>
      </div>
      <div className="admin-actions">
        <Link to="/addboat">
        <button>Add New Boat</button>
        </Link>
        <Link to="/viewbookinghistory">
        <button>View Booking History</button></Link>
        <Link to="/manageuser">
        <button>Manage Users</button></Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
