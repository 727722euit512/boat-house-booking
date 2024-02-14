// ViewBookingHistory.js
import React from 'react';
import './ViewBookingHistory.css';

const ViewBookingHistory = () => {
const bookings=[
    {bookingId:"12345",boatName:"Aqua Haven Boat",customerName:"Nandhini",fromDate:"02-02-2024",toDate:"15-02-2024"},
    {bookingId:"12345",boatName:"Aqua Haven Boat",customerName:"Nandhini",fromDate:"02-02-2024",toDate:"15-02-2024"},
    {bookingId:"12345",boatName:"Aqua Haven Boat",customerName:"Nandhini",fromDate:"02-02-2024",toDate:"15-02-2024"},
    {bookingId:"12345",boatName:"Aqua Haven Boat",customerName:"Nandhini",fromDate:"02-02-2024",toDate:"15-02-2024"},
    {bookingId:"12345",boatName:"Aqua Haven Boat",customerName:"Nandhini",fromDate:"02-02-2024",toDate:"15-02-2024"},
    {bookingId:"12345",boatName:"Aqua Haven Boat",customerName:"Nandhini",fromDate:"02-02-2024",toDate:"15-02-2024"},
    {bookingId:"12345",boatName:"Aqua Haven Boat",customerName:"Nandhini",fromDate:"02-02-2024",toDate:"15-02-2024"},
]
  return (
    <div className="view-booking-history-container">
      <h1>Booking History</h1>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.bookingId}>
            <strong>Booking ID:</strong> {booking.bookingId}, <strong>User:</strong> {booking.customerName},{' '}
            <strong>Boat:</strong> {booking.boatName}, <strong>From:</strong> {booking.fromDate}, <strong>To:</strong>{' '}
            {booking.toDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBookingHistory;
