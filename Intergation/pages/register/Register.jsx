// import React, { useState } from 'react';

// import "./signup.css"
// // import Navbar from './components/Navbar';
// const Register = () => {
//   const [formData, setFormData] = useState({
//     companyName: '',
//     username: '',
//     email: '',
//     password: '',
//     role: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();



//     // Perform registration logic here

//     // Assuming registration is successful
//     alert('Registration completed!');
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="register-container">
//       <div className="left-side">
//         <h2>About the Website</h2>
//         <p>This is some information about the website.</p>
//       </div>
//       <div className="right-side">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="cname">CompanyName:</label>
//           <input
//             type="text"
//             id="cname"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             // value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="role">Role:</label>
//           <input
//             type="text"
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Register</button>
//         </form>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Register;  





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './signup.css';

// const Register = ({ onRegister }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     mobileNumber: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle user registration (you can add an API call here)
//     console.log('Registration submitted:', formData);
//     // Assuming a successful registration, call onRegister to set the user data
//     onRegister(formData);
//   };

//   return (
//     <div className="register-container">
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <label>
//           Username:
//           <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </label>
//         <label>
//           Confirm Password:
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Mobile Number:
//           <input
//             type="tel"
//             name="mobileNumber"
//             pattern="[0-9]{10}"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <Link to="/">

//         <button type="submit">Register</button>
//         </Link>
//       </form>
//       <p>
//         Already have an account? <Link to="/login">Login here</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './signup.css';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    "email": '',
    "name": '',
    "password": '',
    "confirmPassword": '',
    "mobileNumber": '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
      window.location.href = './Login';
      console.log('Registration successful:', response.data);
      // Assuming a successful registration, call onRegister to set the user data
      onRegister(response.data);
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration failure (display error message, etc.)
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Username:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="tel"
            name="mobileNumber"
            pattern="[0-9]{10}"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
