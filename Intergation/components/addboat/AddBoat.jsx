
// import React, { useState } from 'react';
// import './AddBoat.css';

// const AddBoat = ({ onAddBoat }) => {
  
//   const [formData, setFormData] = useState({
//     boatName: '',
//     boatLocation: '',
//     boatCategory: '',
//     boatAvailableStatus: '',
//     price: 0,
//     capacity: 0,
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to handle adding a new boat (you can add an API call here)
//     console.log('Adding new boat:', formData);
//     // Assuming a successful boat addition, call onAddBoat to update the admin dashboard
//     onAddBoat(formData);
//   };

//   return (
    
//     <div className="add-boat-container">
     
//       <h1>Add New Boat</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Boat Name:
//           <input type="text" name="boatName" value={formData.boatName} onChange={handleChange} required />
//         </label>
//         <label>
//           Location:
//           <input type="text" name="boatLocation" value={formData.boatLocation} onChange={handleChange} required />
//         </label>
//         <label>
//           Category:
//           <input type="text" name="boatCategory" value={formData.boatCategory} onChange={handleChange} required />
//         </label>
//         <label>
//           Availability Status:
//           <input
//             type="text"
//             name="boatAvailableStatus"
//             value={formData.boatAvailableStatus}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <label>
//           Price:
//           <input type="number" name="price" value={formData.price} onChange={handleChange} required />
//         </label>
//         <label>
//           Capacity:
//           <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} required />
//         </label>
//         <button type="submit">Add Boat</button>
//       </form>
//     </div>
//   );
// };

// export default AddBoat;


// import React, { useState } from 'react';
// import './AddBoat.css';

// const AddBoat = ({ onAddBoat }) => {
//   // Initial state for form data
//   const initialState = {
//     boatid: 0,
//     boatname: '',
//     price: 0,
//     childcount: '',
//     adultcount: '',
//     description: '',
//   };

//   // State variables
//   const [formData, setFormData] = useState(initialState);
//   const [showPopup, setShowPopup] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call the provided onAddBoat function with form data
//     AddBoat(formData);
//     // Show the popup message
//     setShowPopup(true);
//     // Reset form data after submission
//     setFormData(initialState);
//   };

//   // Handle closing the popup message
//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   return (
//     <div className="add-boat-container">
//       <h1>Add New Boat</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Boat ID */}
//         <label>
//           Boat ID:
//           <input type="number" name="boatid" value={formData.boatid} onChange={handleChange} required />
//         </label>
//         {/* Boat Name */}
//         <label>
//           Boat Name:
//           <input type="text" name="boatname" value={formData.boatname} onChange={handleChange} required />
//         </label>
//         {/* Price */}
//         <label>
//           Price:
//           <input type="number" name="price" value={formData.price} onChange={handleChange} required />
//         </label>
//         {/* Child Count */}
//         <label>
//           Child Count:
//           <input type="text" name="childcount" value={formData.childcount} onChange={handleChange} required />
//         </label>
//         {/* Adult Count */}
//         <label>
//           Adult Count:
//           <input type="text" name="adultcount" value={formData.adultcount} onChange={handleChange} required />
//         </label>
//         {/* Description */}
//         <label>
//           Description:
//           <textarea name="description" value={formData.description} onChange={handleChange} required />
//         </label>
//         {/* Submit Button */}
//         <button type="submit">Add Boat</button>
//       </form>
//       {/* Popup message */}
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={handleClosePopup}>&times;</span>
//             <p>Boat added successfully!</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddBoat;

// import React from 'react';
// import './AddBoat.css';

// class AddBoat extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: {
//         boatid: 0,
//         boatname: '',
//         price: 0,
//         childcount: '',
//         adultcount: '',
//         description: '',
//       },
//       showPopup: false,
//     };
//   }

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState(prevState => ({
//       formData: {
//         ...prevState.formData,
//         [name]: value,
//       }
//     }));
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { formData } = this.state;
//     // this.props.AddBoat(formData);
//     this.setState({ showPopup: true, formData: { boatid: 0, boatname: '', price: 0, childcount: '', adultcount: '', description: '' } });
//   };

//   handleClosePopup = () => {
//     this.setState({ showPopup: false });
//   };

//   render() {
//     const { formData, showPopup } = this.state;

//     return (
//       <div className="add-boat-container">
//         <h1>Add New Boat</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Boat ID:
//             <input type="number" name="boatid" value={formData.boatid} onChange={this.handleChange} required />
//           </label>
//           <label>
//             Boat Name:
//             <input type="text" name="boatname" value={formData.boatname} onChange={this.handleChange} required />
//           </label>
//           <label>
//             Price:
//             <input type="number" name="price" value={formData.price} onChange={this.handleChange} required />
//           </label>
//           <label>
//             Child Count:
//             <input type="text" name="childcount" value={formData.childcount} onChange={this.handleChange} required />
//           </label>
//           <label>
//             Adult Count:
//             <input type="text" name="adultcount" value={formData.adultcount} onChange={this.handleChange} required />
//           </label>
//           <label>
//             Description:
//             <textarea name="description" value={formData.description} onChange={this.handleChange} required />
//           </label>
//           <button type="submit">Add Boat</button>
//         </form>
//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <span className="close" onClick={this.handleClosePopup}>&times;</span>
//               <p>Boat added successfully!</p>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default AddBoat;




import React, { useState } from 'react';
import axios from 'axios';
import './AddBoat.css';

const AddBoat = () => {
  const initialState = {
    "boatname": '',
    "price": 0,
    "childcount": '',
    "adultcount": '',
    "description": ''
  };

  const [formData, setFormData] = useState(initialState);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/boat/add', formData,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      });
      window.location.href ="./viewbookinghistory";
      console.log(response.data); // Assuming your backend returns a response with a message
      setShowPopup(true);
      setFormData(initialState);
    } catch (error) {
      console.error('Boat addition failed:', error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="add-boat-container">
      <h1>Add New Boat</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Boat ID:
          <input type="number" name="boatid" value={formData.boatid} onChange={handleChange} required />
        </label>
        <label>
          Boat Name:
          <input type="text" name="boatname" value={formData.boatname} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>
          Child Count:
          <input type="text" name="childcount" value={formData.childcount} onChange={handleChange} required />
        </label>
        <label>
          Adult Count:
          <input type="text" name="adultcount" value={formData.adultcount} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <button type="submit">Add Boat</button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <p>Boat added successfully!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBoat;
