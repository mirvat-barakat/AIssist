import React , {useState, useEffect} from "react";
import Sidebar from "../../components/Sidebar";
import Form from "../../components/Form";

const AdminPage = () => {
    const token = localStorage.getItem("token");
    return (
        <>
        <Sidebar/>
        <Form/>
        </>
        
    );
}
export default AdminPage;