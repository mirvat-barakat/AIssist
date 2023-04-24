import React , {useState, useEffect} from "react";
import Header from  '../../components/Header';
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import "./styles.css";

const ViewSpecialists = () => {

    const [specialists, setSpecialists] = useState([]);
    const token = localStorage.getItem("token");

    const getSpecialists = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/v0.0.1/specialists',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };
  
      useEffect(() => {
        axios.request(getSpecialists)
            .then(response => {
                setUsers(response.data.specialists);
                console.log(response);
            })
            .catch(function (error) {
            //   navigate("/");
            alert("error");
            });
      },[]);

      return (
        <>
        <div className="body">
        <Sidebar/>
        <Header/>
          <div className="users-table">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
              {specialists.map(specialist => (
                  <tr key={specialist.id}>
                      <td>{specialist.name}</td>
                      <td>{specialist.email}</td>
                      <td>{specialist.category}</td>
                      <td>{specialist.speciality}</td>
                      <td>{specialist.phone_number}</td>
                      <td>{specialist.location}</td>
                      <td>{specialist.profile_photo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </>
        
        
    );
}

export default ViewPage;