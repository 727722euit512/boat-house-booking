
// import React, { useState } from 'react';
// import './profile.css';

// const Profile = () => {
//     const [user, setUser]=useState({
//         email:"727722euit512@skcet.ac.in",
//         username:"nandini",
//         userRole:"admin",
//         mobileNumber:"1234567890"
//     })
//   return (
//     <div className="profile-container">
//       <h1>My Profile</h1>
     
//       <div className="profile-details">
//         <div>
//           <strong>Email:</strong> {user.email}
//         </div>
//         <div>
//           <strong>Username:</strong> {user.username}
//         </div>
//         <div>
//           <strong>Role:</strong> {user.userRole}
//         </div>
//         <div>
//           <strong>Mobile Number:</strong> {user.mobileNumber}
//         </div>
        
//       </div>
      
//     </div>
  
//   );
// };

// export default Profile;


import React, { useState } from 'react';
import './profile.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';


const Profile = ({ user }) => {
  const [isEditing, setEditing] = useState(false);

  const userData = {
    fullName: 'Nandini R',
    email: 'nandini@gmail.com',
    mobileNumber: '9600768691',
  };

  const [editedUser, setEditedUser] = useState({ ...userData, ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    console.log('Saving changes:', editedUser);
    setEditing(false);
  };

  return (
    <>
    <Header/>
    {/* <Navbar/> */}
    <div className="profile-container">
    <img src='http://cdn.onlinewebfonts.com/svg/img_119029.png' style={{height:'15rem',width:'15rem',marginLeft:'3rem'}}/>
      <h1 style={{marginTop:0}}>User Profile</h1>
      <form>
        <div className="field-box">
          <label htmlFor="fullName">Full Name:</label>
          <input
            className="edit-input"
            type="text"
            id="fullName"
            name="fullName"
            value={editedUser.fullName}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-box">
          <label htmlFor="email">Email:</label>
          <input
            className="edit-input"
            type="email"
            id="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        <div className="field-box">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            className="edit-input"
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={editedUser.mobileNumber}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>

        {isEditing ? (
          <button className="save-button" type="button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit-button" type="button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </form>
    </div>
    </>
  );
};

export default Profile;