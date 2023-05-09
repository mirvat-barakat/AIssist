import React , {useState, useEffect} from "react";
import Sidebar from "../../components/Sidebar";
import Form from "../../components/Form";
import axios from "axios";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faTrashAlt}  from '@fortawesome/free-solid-svg-icons';

const ViewSpecialists = () => {

    const [specialists, setSpecialists] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const token = localStorage.getItem("token");

    const getSpecialists = {
        method: 'GET',
        url: 'http://192.168.1.6:8000/api/v0.0.1/specialists',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };
  
      useEffect(() => {
        axios.request(getSpecialists)
            .then(response => {
                setSpecialists(response.data.specialists);
            })
            .catch(function (error) {
            //   navigate("/");
            alert("error");
            });
      },[token]);

      const handleAddSpecialistClick = () => {
        setShowForm(true);
      };
      const handleAddSpecialist = () => {
        setShowForm(false);
      }

      return (
        <>
        <div className="body">
        <Sidebar/>
        <div className="title1">
          <h1>Specialists Managment</h1>
          <button className="button2" onClick={handleAddSpecialistClick}>Add Specialists</button>
        </div>
          <div className="specialists-table">
            <table>
              <thead>
                <tr>
                  <th>Profile Photo</th>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Category</th>
                  <th>Speciality</th>
                  <th>Phone Number</th>
                  <th>Whatsapp Number</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {specialists.map(specialist => (
                  <tr key={specialist.id}>
                      <td>
                      <img src={specialist.profile_picture} alt={specialist.name} className="profile-photo"/>
                      </td>
                      <td>{specialist.id}</td>
                      <td>{specialist.name}</td>
                      <td>{specialist.email}</td>
                      <td>{specialist.category}</td>
                      <td>{specialist.speciality}</td>
                      <td>{specialist.phone_number}</td>
                      <td>{specialist.whatsapp_number}</td>
                      <td>{specialist.Location}</td>
                      <td><FontAwesomeIcon icon= {faTrashAlt}  className="faicon" size="1x" color="#F08080"/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showForm && (
            <div className="add-form-backdrop">
          <Form onSubmit={handleAddSpecialist} />
          </div>
          )}
          </div>
        </>
        
        
    );
}

export default ViewSpecialists;