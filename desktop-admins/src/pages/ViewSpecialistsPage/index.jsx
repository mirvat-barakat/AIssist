import React , {useState, useEffect} from "react";
import Sidebar from "../../components/Sidebar";
import Form from "../../components/Form";
import axios from "axios";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faTrashAlt}  from '@fortawesome/free-solid-svg-icons';
import Confirmation from "../../components/ConfirmationDialog";

const ViewSpecialists = () => {

    const [specialists, setSpecialists] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const token = localStorage.getItem("token");
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);


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
      const handleDeleteClick= () => {
          setShowDeleteDialog(true);
        }
      const handleDeleteCancel= ()=>{
          setShowDeleteDialog(false);
        }

      const handleDeleteSpecialist = () => {
        const specialistId = localStorage.getItem('specialistId');
        axios.post('http://192.168.1.6:8000/api/v0.0.1/specialist/'+specialistId, {
      }, {
          headers: {
              'content-type': 'application/json',
              'Accept': 'application/json',
              Authorization: 'bearer ' + token
          }
      }).then(response => {
        if (response.data.status == "success"){
          setShowDeleteDialog(false);
        }
      })
        .catch(error => {
            console.error();
      });
      };
      

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
                      <td><FontAwesomeIcon icon= {faTrashAlt}  className="faicon-delete" size="1x" color="#F08080" onClick={() => {
                            localStorage.setItem('specialistId', JSON.stringify(specialist.id));
                            handleDeleteClick()
                        }} /></td>
                         {showDeleteDialog && (
                            <div className="add-form-backdrop">
                            <Confirmation
                            message="Are you sure you want to delete this specialist"
                            onCancel={handleDeleteCancel}
                            onConfirm={handleDeleteSpecialist}
                            />
                            </div>)}
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