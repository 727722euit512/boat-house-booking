
import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
    const [user, setUser]=useState({
        email:"727722euit512@skcet.ac.in",
        username:"nandini",
        userRole:"admin",
        mobileNumber:"1234567890"
    })
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-details">
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Username:</strong> {user.username}
        </div>
        <div>
          <strong>Role:</strong> {user.userRole}
        </div>
        <div>
          <strong>Mobile Number:</strong> {user.mobileNumber}
        </div>
      </div>
    </div>
  );
};

export default Profile;