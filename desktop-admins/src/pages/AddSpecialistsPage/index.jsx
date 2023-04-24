import React , {useState, useEffect} from "react";
import Header from  '../../components/Header';
import Sidebar from "../../components/Sidebar";
import "./styles.css";
import axios from "axios";

const AddSpecialists = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [phone_number, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [profile_picture, setProfilePicture] = useState('');
    const token = localStorage.getItem("token");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v0.0.1/specialist', {
      name: name,
      email: email,
      category: category,
      speciality: speciality,
      phone_number: phone_number,
      location: location,
      profile_picture: profile_picture,
    }, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'bearer ' + token

      }
    })
      .then(response => {
        console.log(response);
        if ( response.status== "success") {
            alert("Specialist added");
        }
        else{
          alert("Incorrect Credentials");

        }
      })
      .catch(error => {
        console.error(error);
      });
  };


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

        <button type="submit" onClick={handleFormSubmit}>Add</button>
      </form>
    </div>
        </>
    )
}

export default AddSpecialists;