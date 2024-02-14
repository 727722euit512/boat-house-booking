
import React, { useState } from 'react';
import './ManageUsers.css';

const ManageUsers = () => {
    const users=[{
        userId: 1,
        username: 'admin',
        email: 'admin@example.com',
        mobileNumber: '123-456-7890',
      },
      {
        userId: 2,
        username: 'jeyjey',
        email: 'user1@example.com',
        mobileNumber: '987-654-3210',
      },
      {
        userId: 3,
        username: 'sanam',
        email: 'user1@example.com',
        mobileNumber: '987-654-3210',
      },
      {
        userId: 4,
        username: 'canacan',
        email: 'user1@example.com',
        mobileNumber: '987-654-3210',
      },
      {
        userId: 5,
        username: 'jan',
        email: 'user1@example.com',
        mobileNumber: '987-654-3210',
      },
      {
        userId: 6,
        username: 'jack',
        email: 'user1@example.com',
        mobileNumber: '987-654-3210',
      },
      {
        userId: 7,
        username: 'rosh',
        email: 'user1@example.com',
        mobileNumber: '987-654-3210',
      },
    ]
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="manage-users-container">
      <h1>Manage Users</h1>
      <div className="user-list">
        <ul>
          {users.map((user) => (
            <li key={user.userId} onClick={() => handleUserClick(user)} className={selectedUser === user ? 'selected' : ''}>
              {user.username}
            </li>
          ))}
        </ul>
      </div>
      <div className="user-details">
        {selectedUser && (
          <div>
            <h2>{selectedUser.username}</h2>
            <p>Email: {selectedUser.email}</p>
            <p>Mobile Number: {selectedUser.mobileNumber}</p>
            {/* Add more user details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageUsers;
