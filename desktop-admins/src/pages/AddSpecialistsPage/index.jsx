import React , {useState, useEffect} from "react";
import Header from  '../../components/Header';
import Sidebar from "../../components/Sidebar";
import "./styles.css";

const AddSpecialists = () => {
    return (
        <>
        <div className="body">
        <Sidebar/>
        <Header/>
        </div>
        <div>
      <h2>Add Specialist</h2>
      <form className="form">
        <label htmlFor="name" className="input1-text">Name:</label>
        <input className="input1"
          type="text"
          id="name"
        />
        <label htmlFor="email" className="input1-text">Email:</label>
        <input className="input1"
          type="text"
          id="Email"
        />
        <label htmlFor="category" className="input1-text">Category:</label>
        <input className="input1"
          type="text"
          id="Category"
        />
        <label htmlFor="speciality" className="input1-text">Speciality:</label>
        <input className="input1"
          type="text"
          id="Speciality"
        />
       
        <label htmlFor="phone-number" className="input1-text">Phone number:</label>
        <input className="input1"
          type="text"
          id="Phone number"
        />
        <label htmlFor="location" className="input1-text">Location:</label>
        <input className="input1"
          type="text"
          id="Location"
        />

        <button type="submit">Add</button>
      </form>
    </div>
        </>
    )
}

export default AddSpecialists;