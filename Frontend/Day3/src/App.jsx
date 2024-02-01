// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App







// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Login from './pages/Login';
// import NavBar from './components/Navbar';
// import SignUp from './pages/SignUp';
// import Profile from'./pages/Profile';
// function App() {
//   return (
//     <Router>
//       <NavBar/>
//       <Routes>
//         <Route path="/home"  element={<Home/>} />
//         <Route path="/aboutus" element={<AboutUs/>}/>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/signup" element={<SignUp/>}/>
//         <Route path="/Profile" element={<Profile/>}/>
        

//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react'
// import './app.css'
// import Footer from'./components/Footer/Footer';
// import Home from'./components/Home/Home';
// import NavBar from'./components/Navbar/NavBar';
// // import Main from'./components/Main/Main';


// function App  () {

//   return (
//     <>
//     <Navbar/>
//     <Home/>
//     <Main/>
//     <Footer/>
//     </>
//   )
// }

// export default App;



// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React from 'react'
// import'./src/app.css'
// import Footer from'./components/Footer';
// import Home from './components/Home';
// import Main from'./components/Main';
// import NavBar from'./components/NavBar';

// const App = () => {
//   return(
//     <>
//     <NavBar/>
//     <Home/>
//     <Main/>
//     <Footer/>

//     </>
//   )
// }



// export default App;







// import React from 'react'
// import'./app.css'
// import NavBar from './components/NavBar/NavBar'
// import Home from'./components/Home/Home'
// import Footer from'./components/Footer/Footer'
// import Main from'./components/Main/Main'


// const App = () => {
//   return (
//     <>
   
//     <NavBar/>
    

//     </>
//   )
// }

// export default App




// import {
//    BrowserRouter,
//    Routes,
//    Route,
//    } from "react-router-dom";

// import React from 'react'
// import'./app.css'
// import Home from './pages/Home/Home';
// import Home from'./pages/Home/Home'
// import Boat from"../pages/boat/Boat";
// import List from"../pages/list/List";

// function App() {
//   return ( 
    // <BroserRouter>
    // <Routes>
    //   <Route path="/" element={<Home/>}/>
    //   <Route path="/boat" element={<Boat/>}/>
    //   <Route path="/boat/:id" element={<List/>}/>
  
    // </Routes>
    // </BroserRouter>

//     <div>Home</div>
//    );
// }

// export default App;



// import React from 'react'
// import './app.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import Home from '../pages/Home';
// import Home from "./pages/home/Home";
// import List from "./pages/list/List";
// import Boat from "./pages/boats/Boat";

// function  App  ()  {
//   return (
//     <BrowserRouter>
  
//       <Routes>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/boats" element={<List/>}/>
//         <Route path="/boats/:id" element={<Boat/>}/>
//       </Routes>
      
//     </BrowserRouter>
//   )
// }
// export default App



import { BrowserRouter, Routes,  Route,} from "react-router-dom";
import React from 'react';
// import'./src/App.css';
import './App.css';
import Home from "./pages/home/Home";
import Boat from "./pages/boat/Boat";
import List from "./pages/list/List";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/aboutus/AboutUs";
import Header from "./components/header/Header";
import ContactUs from "./pages/contactus/ContactUs";
import Profile from "./pages/profile/Profile";
// import NavBar from"./components/NavBar";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/boat" element={<List/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
