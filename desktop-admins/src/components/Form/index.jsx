import React from 'react';
import './styles.css';

const Form = () => {


    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            required
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            required
          />
          <label htmlFor="speciality">Speciality:</label>
          <input
            type="text"
            id="speciality"
            required
          />
          <label htmlFor="phone-number">Phone Number:</label>
          <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            required
          />
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            required
          />
          <label htmlFor="profile-picture">Profile Picture:</label>
          <input
            type="file"
            id="profile-picture"
          />
          <button type="submit">Add Specialist</button>
        </form>
      );
};
export default Form