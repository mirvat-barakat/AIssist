import React , {useState, useEffect} from "react";
import Header from  '../../components/Header';
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import "./styles.css";

const ViewPage = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [users, setUsers] = useState([]);
    const token = localStorage.getItem("token");

    const getUsers = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/api/v0.0.1/users',
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
              {users.map(user => (
                  <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.created_at}</td>
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