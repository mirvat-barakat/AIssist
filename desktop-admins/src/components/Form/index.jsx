import React from 'react';
import './styles.css';

const Form = () => {


    return (
        <form>
          <label htmlFor="name">Name:</label>
          <input
          className="input1"
            type="text"
            id="name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
          className="input1"
            type="email"
            id="email"
            required
          />
          <label htmlFor="category">Category:</label>
          <input
          className="input1"
            type="text"
            id="category"
            required
          />
          <label htmlFor="speciality">Speciality:</label>
          <input
          className="input1"
            type="text"
            id="speciality"
            required
          />
          <label htmlFor="phone-number">Phone Number:</label>
          <input
          className="input1"
            type="text"
            id="phone-number"
            required
          />
          <label htmlFor="location">Location:</label>
          <input
          className="input1"
            type="text"
            id="location"
            required
          />
          <label htmlFor="profile-picture">Profile Picture:</label>
          <input
          className="input1"
            type="file"
            id="profile-picture"
          />
          <button type="submit">Add Specialist</button>
        </form>
      );
};
export default Form