// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "./login.css"
// // import Navbar from '../components/Navbar';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState('');
//   const navigate=useNavigate();

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePassword = (password) => {
//     // Password should contain at least 8 characters, one special character, one uppercase character, and one digit
//     const passwordRegex = /^(?=.[A-Z])(?=.[!@#$%^&])(?=.[0-9])(?=.*[a-z]).{8,}$/;
//     return passwordRegex.test(password);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError('Invalid email format');
//       return;
//     }

//     if (!validatePassword(password)) {
//       setError('Invalid password format');
//       return;
//     }
//     alert("Login completed")
//     if(email.includes('@admin.com'))
//     {
//       navigate('/admin');
//     }
//     else{
//       navigate('/userdashboard')
//     }

//     // Simulating a login process
//     setIsLoggedIn(true);
//     setError('');
//     // You might want to add additional logic for handling login in a real application
//   };

//   const handleLogout = () => {
//     // Simulating a logout process
//     setIsLoggedIn(false);
//     // You might want to add additional logic for handling logout in a real application
//   };

//   return (
//     <>
//     <Navbar/>
//       <div className="App">
//         <div className="loginContainer" style={{marginTop:'10rem',marginBottom:'10rem'}}>
//           <h1 >Welcome Back!</h1>

//           <div className="input-container">
//             <label>Email </label>
//             <input
//               type="text"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input-container">
//             <label>Password </label>
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           {error && <p className="error-message">{error}</p>}

//           <a href="#">Forgot password?</a>
//           <a href="#">Create a new account</a>

//           <button className="loginBut" onClick={handleLogin}>
//             <p>login</p>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './login.css';
// import RoleButton from '../../components/rolebutton/RoleButton';

// const Login = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle user login (you can add an API call here)
//     console.log('Login submitted:', formData);
//     // Assuming a successful login, call onLogin to set the user data
//     onLogin(formData);
//   };
//   const [activeRole, setActiveRole] = useState('user');

//   const handleRoleChange = (role) => {
//     setActiveRole(role);
//     // Add logic to handle role change (e.g., switch between user and admin panels)
//   };
//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </label>
//           <RoleButton role="user" onClick={handleRoleChange} active={activeRole === 'user'} />
//           <RoleButton role="admin" onClick={handleRoleChange} active={activeRole === 'admin'} />
//         <br/>
//         <Link to={activeRole=="user"?"/boat":"/admin-dashboard"}>
//         <button type="submit">Login</button>
//         </Link>
//       </form>
//       <p>
//         Don't have an account? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios'; 
// import './login.css';
// import RoleButton from '../../components/rolebutton/RoleButton';

// const Login = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/login', formData);
//       window.location.href = './Home';
//       console.log('Login successful:', response.data);
//       // Assuming a successful login, call onLogin to set the user data
//       onLogin(response.data);
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle login failure (display error message, etc.)
//     }
//   };

//   const [activeRole, setActiveRole] = useState('user');

//   const handleRoleChange = (role) => {
//     setActiveRole(role);
//     // Add logic to handle role change (e.g., switch between user and admin panels)
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <label>
//           Password:
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </label>
//         <RoleButton role="user" onClick={handleRoleChange} active={activeRole === 'user'} />
//         <RoleButton role="admin" onClick={handleRoleChange} active={activeRole === 'admin'} />
//         <br/>
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './login.css';
import RoleButton from '../../components/rolebutton/RoleButton';
import Header from '../../components/header/Header';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', formData);
      window.location.href = './admin-dashboard';
      console.log('Login successful:', response.data);
      localStorage.setItem("token",response.data.token);
      // Assuming a successful login, call onLogin to set the user data
      Login(response.data);
      // if(activeRole==="user")
      //   navigate("/boat");
      // else
      //   navigate("/admin-dashboard");
      
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Login failed:', error.response.data);
        // Handle login failure (display error message, etc.)
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Login request made but no response received:', error.request);
        // Handle request failure (retry request, display error message, etc.)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
        // Handle setup error (retry request, display error message, etc.)
      }
    }
  };

  const [activeRole, setActiveRole] = useState('user');

  const handleRoleChange = (role) => {
    setActiveRole(role);
    // Add logic to handle role change (e.g., switch between user and admin panels)
  };
  const navigate=useNavigate();
  return (
    <>
    <Header/>
    <div className="login-container">
      
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <RoleButton role="user" onClick={handleRoleChange} active={activeRole === 'user'} />
        <RoleButton role="admin" onClick={handleRoleChange} active={activeRole === 'admin'} />
        <br/>
        {/* <Link to={activeRole === "user" ? "/boat" : "/admin-dashboard"}> */}
          <button type="submit">Login</button>
        {/* </Link> */}
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
    </>
  );
};

export default Login;

