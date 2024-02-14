
// import React, { useState } from 'react';
// import './contactus.css';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="contact-us-container">
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//         </label>
//         <label>
//           Subject:
//           <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
//         </label>
//         <label>
//           Message:
//           <textarea name="message" value={formData.message} onChange={handleChange} required />
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;

// // import React, { useState } from 'react';
// // import './contactus.css';

// // const ContactUs = () => {

// // <section id="contact">
// //   <h1 className="section-header">Contact</h1>
// //   <div className="contact-wrapper">
// //     {/* Left contact page */}
// //     <form id="contact-form" className="form-horizontal" role="form">
// //       <div className="form-group">
// //         <div className="col-sm-12">
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="name"
// //             placeholder="NAME"
// //             name="name"
// //             defaultValue=""
// //             required=""
// //           />
// //         </div>
// //       </div>
// //       <div className="form-group">
// //         <div className="col-sm-12">
// //           <input
// //             type="email"
// //             className="form-control"
// //             id="email"
// //             placeholder="EMAIL"
// //             name="email"
// //             defaultValue=""
// //             required=""
// //           />
// //         </div>
// //       </div>
// //       <textarea
// //         className="form-control"
// //         rows={10}
// //         placeholder="MESSAGE"
// //         name="message"
// //         required=""
// //         defaultValue={""}
// //       />
// //       <button
// //         className="btn btn-primary send-button"
// //         id="submit"
// //         type="submit"
// //         value="SEND"
// //       >
// //         <div className="alt-send-button">
// //           <i className="fa fa-paper-plane" />
// //           <span className="send-text">SEND</span>
// //         </div>
// //       </button>
// //     </form>
// //     {/* Left contact page */}
// //     <div className="direct-contact-container">
// //       <ul className="contact-list">
// //         <li className="list-item">
// //           <i className="fa fa-map-marker fa-2x">
// //             <span className="contact-text place">City, State</span>
// //           </i>
// //         </li>
// //         <li className="list-item">
// //           <i className="fa fa-phone fa-2x">
// //             <span className="contact-text phone">
// //               <a href="tel:1-212-555-5555" title="Give me a call">
// //                 (212) 555-2368
// //               </a>
// //             </span>
// //           </i>
// //         </li>
// //         <li className="list-item">
// //           <i className="fa fa-envelope fa-2x">
// //             <span className="contact-text gmail">
// //               <a href="mailto:#" title="Send me an email">
// //                 hitmeup@gmail.com
// //               </a>
// //             </span>
// //           </i>
// //         </li>
// //       </ul>
// //       <hr />
// //       <ul className="social-media-list">
// //         <li>
// //           <a href="#" target="_blank" className="contact-icon">
// //             <i className="fa fa-github" aria-hidden="true" />
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#" target="_blank" className="contact-icon">
// //             <i className="fa fa-codepen" aria-hidden="true" />
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#" target="_blank" className="contact-icon">
// //             <i className="fa fa-twitter" aria-hidden="true" />
// //           </a>
// //         </li>
// //         <li>
// //           <a href="#" target="_blank" className="contact-icon">
// //             <i className="fa fa-instagram" aria-hidden="true" />
// //           </a>
// //         </li>
// //       </ul>
// //       <hr />
// //       <div className="copyright">© ALL OF THE RIGHTS RESERVED</div>
// //     </div>
// //   </div>
// // </section>
// // }

// // export default ContactUs;


// import React from 'react';

// const ContactUs = () => {
//   return (
//     <section>
//       <div className="container">
//         <div className="contactinfo">
//           <div>
//             <h2>Contact Us</h2>
//             <ul className="info">
//               <li>
//                 {/* <span>
//                   <img src="https://www.clipartmax.com/png/middle/121-1214856_pro-locator-free-location-icon-vector.png" alt="Location Icon" />
//                 </span> */}
//                 {/* <span>
//                   1 John Smith Street <br />
//                   Smithville <br />
//                   Smithland
//                 </span> */}
//               </li>
//               <li>
//                 {/* <span>
//                   <img src="https://p7.hiclipart.com/preview/663/97/225/email-computer-icons-message-bounce-address-email-icon.jpg" alt="Email Icon" />
//                 </span> */}
//                 <span>johnsmith@johnsmith.com</span>
//               </li>
//               <li>
//                 {/* <span>
//                   <img src="https://www.pinclipart.com/picdir/middle/210-2108807_tete-mobile-svg-png-icon-free-download-phone.png" alt="Phone Icon" />
//                 </span> */}
//                 <span>01234567890</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="contactusform">
//           <h2>Send Us A Message</h2>
//           <div className="formBox">
//             <div className="inputBox w50">
//               <input type="text" name="" required="" />
//               <span>First Name</span>
//             </div>
//             <div className="inputBox w50">
//               <input type="text" name="" required="" />
//               <span>Last Name</span>
//             </div>
//             <div className="inputBox w50">
//               <input type="text" name="" required="" />
//               <span>Email Address</span>
//             </div>
//             <div className="inputBox w100">
//               <textarea name="" required="" defaultValue={""} />
//               <span>Please enter a message</span>
//             </div>
//             <div className="inputBox w50">
//               <input type="submit" defaultValue="Send" />
//             </div>
//           </div>
//         </div>
//       </div>
     
//     </section>
//   );
// };

// export default ContactUs;

import React, { useState } from 'react';
import Header from '../../components/header/Header';

const ContactUs = () => {
  // State to control the visibility of the popup message
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    // Logic for form submission
    // For demonstration purposes, let's just show the popup message
    setShowPopup(true);

    // Reset form fields if needed
    // e.target.reset();
  };

  // Function to close the popup message
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
    <Header/>
    <section>
      <div className="container">
        <div className="contactinfo">
          {/* Contact information section */}
        </div>
        <div className="contactusform">
          <h2>Send Us A Message</h2>
          <div className="formBox">
            {/* Form inputs */}
            <div className="inputBox w50">
              <input type="text" name="" required="" />
              <span>First Name</span>
            </div>
            {/* More input fields */}
            <div className="inputBox w50">
              <input type="text" name="" required="" />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="" required="" />
              <span>Email Address</span>
            </div>
            <div className="inputBox w100">
              <input name="" required="" defaultValue={""} />
              <br/>
              <span>Please enter a message</span>
            </div>
            <div className="inputBox w50">
              {/* Add onClick event to the submit button */}
              <input type="submit" value="Send" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Popup message */}
      {/* Conditionally render the popup message based on the state */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            {/* Close button for the popup */}
            <span className="close" onClick={handleClosePopup}>&times;</span>
            {/* Message content */}
            <p>Your message has been submitted successfully!</p>
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default ContactUs;
