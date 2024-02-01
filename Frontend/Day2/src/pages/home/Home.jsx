// import React from 'react';
// // import'../assets/css/Home.css';
// function Home(){
//     return (
//         <div>
//             Home
//         </div>
//     );
// }
// export default Home;


// import React from 'react';
// // import { Link } from 'react-router-dom';
// import '../assets/css/Home.css';

// function Home() {
//   return (
//     <div className="home-container">
//       <h1>Welcome to the Boat House Booking Platform</h1>
//       <p>Find the perfect boat house for your unique stay on the water.</p>
//       {/* <Link to="/search" className="start-search-btn"> */}
//         Start your search
//       {/* </Link> */}
//     </div>
//   );
// }

// export default Home;


// import React from 'react'
// import "./Home.css"

// export const Home = () => {
//   return (
//     <div>
//       <NavBar/>
//     </div>
//   )
// }
// export default Home






import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      {/* <Header/> */}
      <div className="homeContainer">
        {/* <Featured/> */}
        {/* <h1 className="homeTitle">Browse by property type</h1> */}
        {/* <PropertyList/> */}
        {/* <h1 className="homeTitle">Homes guests love</h1> */}
        {/* <FeaturedProperties/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
