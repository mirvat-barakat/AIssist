import React , {useState, useEffect} from "react";
import Header from  '../../components/Header';
import Sidebar from "../../components/Sidebar";
import axios from ".axios";

const ViewPage = () => {

    const getUsers = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/v0.0.1/users/',
        headers: {
          'content-type': 'application/json',
          'Accept' : 'application/json',
          'Authorization': 'bearer ' + token
        },
      };
  
      useEffect(() => {
        axios.request(getUsers)
            .then(response => {
                setUsers(response.data.users);
                console.log(response);
            })
            .catch(function (error) {
            //   navigate("/");
            alert("error");
            });
      },[]);
  
      const toggle = () => {
        setIsOpen(!isOpen);
      };

    return (
        <>
        <Sidebar/>
        <Header/>
        </>
        
        
    );
}
export default ViewPage;