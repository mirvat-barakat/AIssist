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
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
        //   onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
        </>
    )
}

export default AddSpecialists;