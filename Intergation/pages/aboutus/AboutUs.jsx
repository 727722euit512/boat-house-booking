// AboutUs.js
import React from 'react';
import './aboutus.css';
import Header from '../../components/header/Header';

const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className="about-us-container">
      
      <h1>About Us</h1>
      <p>
        Welcome to our Online Boat House Booking System! We are passionate about providing a unique and
        immersive experience for individuals seeking accommodations on the water.
      </p>
      <p>
        Our platform is designed to offer a user-friendly environment where you can discover, select, and
        reserve boat houses tailored to your individual preferences. Whether you're looking for a peaceful
        retreat or an adventurous stay, our diverse range of boat houses has something for everyone.
      </p>
      <p>
        At Online Boat House Booking, we believe in making your booking process seamless and enjoyable. Our
        team is dedicated to ensuring that you have a memorable experience from the moment you start your
        search until the completion of your stay.
      </p>
      <p>
        Explore our platform, find the perfect boat house, and embark on a one-of-a-kind water adventure!
      </p>
      
      </div>
    </>
    
  );
};

export default AboutUs;
