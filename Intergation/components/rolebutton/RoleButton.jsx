// RoleButton.js
import React from 'react';
import './RoleButton.css';

const RoleButton = ({ role, onClick, active }) => {
  return (
    <button className={`role-button ${active ? 'active' : ''}`} onClick={() => onClick(role)}>
      {role === 'admin' ? 'Admin Panel' : 'User Panel'}
    </button>
  );
};

export default RoleButton;
