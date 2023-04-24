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
}

export default ViewPage;