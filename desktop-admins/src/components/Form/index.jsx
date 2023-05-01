import React from 'react';
import './styles.css';

const Form = () => {


    return (
        <form className="form">
          <label htmlFor="name" className="input1-text">Name:</label>
          <input
            className="input1"
            type="text"
            id="name"
            required
          />
          <label htmlFor="email" className="input1-text">Email:</label>
          <input
            className="input1"
            type="email"
            id="email"
            required
          />
          <label htmlFor="category" className="input1-text">Category:</label>
          <input
            className="input1"
            type="text"
            id="category"
            required
          />
          <label htmlFor="speciality" className="input1-text">Speciality:</label>
          <input
            className="input1"
            type="text"
            id="speciality"
            required
          />
          <label htmlFor="phone-number" className="input1-text">Phone Number:</label>
          <input
            className="input1"
            type="text"
            id="phone-number"
            required
          />
          <label htmlFor="location" className="input1-text">Location:</label>
          <input
            className="input1"
            type="text"
            id="location"
            required
          />
          <label htmlFor="profile-picture" className="input1-text">Profile Picture:</label>
          <input
            className="input1"
            type="file"
            id="profile-picture"
          />
          <button type="submit" className='button2'>Add Specialist</button>
        </form>
      );
};
export default Form