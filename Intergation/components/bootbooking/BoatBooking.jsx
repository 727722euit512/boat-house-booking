// import React, { useState } from 'react';
// import './BoatBooking.css';

// const BoatBooking = () => {
//   const [name, setName] = useState('');
//   const [date, setDate] = useState('');
//   const [numberOfGuests, setNumberOfGuests] = useState(1);
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you can add logic to handle the form submission, such as sending the booking details to a backend server
//     setMessage(`Booking confirmed for ${name} on ${date} for ${numberOfGuests} guests.`);
//     // Reset form fields
//     setName('');
//     setDate('');
//     setNumberOfGuests(1);
//   };

//   return (
//     <div className="boat-booking">
//       <h2>Book a Boat</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </label>
//         <label>
//           Date:
//           <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         </label>
//         <label>
//           Number of Guests:
//           <input type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} min={1} required />
//         </label>
//         <button type="submit">Book Now</button>
//       </form>
//       {message && <p className="confirmation-message">{message}</p>}
//     </div>
//   );
// };

// export default BoatBooking;




// import React, { useState } from 'react';
// import './BoatBooking.css';

// const BoatBooking = () => {
//   const [bookingId, setBookingId] = useState('');
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [checkInDate, setCheckInDate] = useState('');
//   const [checkOutDate, setCheckOutDate] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     try{
//       const response = await axios.post('http://localhost:8080/booking', formData,{
//         headers:{
//           Authorization:`Bearer ${localStorage.getIteam('token')}`
//         }
//       });
//       window.location.href="./managehistory";
//       console.log(response.data);
//       setFormData(initialState);
//     }
//     // Here you can add logic to handle the form submission, such as sending the booking details to a backend server
//     setMessage(`Booking confirmed for ${adults} adults and ${children} children from ${checkInDate} to ${checkOutDate}. Booking ID: ${bookingId}`);
//     // Reset form fields
//     setBookingId('');
//     setAdults(1);
//     setChildren(0);
//     setCheckInDate('');
//     setCheckOutDate('');
//   };

//   return (
//     <div className="boat-booking">
      
//       <form onSubmit={handleSubmit}>
//         <label>
//           Booking ID:
//           <input type="text" value={bookingId} onChange={(e) => setBookingId(e.target.value)} required />
//         </label>
//         <label>
//           Adults:
//           <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} min={1} required />
//         </label>
//         <label>
//           Children:
//           <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} min={0} />
//         </label>
//         <label>
//           Check-in Date:
//           <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
//         </label>
//         <label>
//           Check-out Date:
//           <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
//         </label>
//         <button type="submit">Book Now</button>
//       </form>
//       {message && <p className="confirmation-message">{message}</p>}
//     </div>
//   );
// };

// export default BoatBooking;






import React, { useState } from 'react';
import axios from 'axios'; 
import './BoatBooking.css';

const BoatBooking = () => {
  const [bookingId, setBookingId] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => { 
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/booking',{
        "userId": bookingId,
        "adults": adults,
        "child": children,
        "checkin": checkInDate,
        "checkout": checkOutDate
      }, {
       
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      });
      window.location.href ="./manageuser";
      console.log(response.data);
     
      setMessage(`Booking confirmed for ${adults} adults and ${children} children from ${checkInDate} to ${checkOutDate}. Booking ID: ${bookingId}`);
      // Reset form fields
      setBookingId('');
      setAdults('');
      setChildren('');
      setCheckInDate('');
      setCheckOutDate('');
      // Redirect to managehistory page
      window.location.href = "./managehistory";
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (
    <div className="boat-booking">
      <form onSubmit={handleSubmit}>
        <label>
          Booking ID:
          <input type="text" value={bookingId} onChange={(e) => setBookingId(e.target.value)} required />
        </label>
        <label>
          Adults:
          <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} min={1} required />
        </label>
        <label>
          Children:
          <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} min={0} />
        </label>
        <label>
          Check-in Date:
          <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
        </label>
        <label>
          Check-out Date:
          <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
        </label>
        <button type="submit">Book Now</button>
      </form>
      {message && <p className="confirmation-message">{message}</p>}
    </div>
  );
};

export default BoatBooking;
