// import React from 'react'
// import "./NavBar.css"

// const NavBar = () => {
//   return (
//     <div className="navbar">
//     <div className="navContainer">
//         <span className="logo">BoatVoyugar</span>
//         <div className="navIteams">
//             <button className="navButton">Register</button>
//             <button className="navButton">Login</button>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default NavBar




import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">BOATVOYAGAR</span>
        <div className="navItems">
          <Link to='/register'>
          <button className="navButton">Register</button>
          </Link>
          <Link to='/login'>
          <button className="navButton">Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar