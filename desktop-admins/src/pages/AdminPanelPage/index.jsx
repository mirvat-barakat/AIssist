import React , {useState, useEffect} from "react";
import Sidebar from "../../components/Sidebar";

const AdminPage = () => {
    const token = localStorage.getItem("token");
    return (
        <>
        <Sidebar/>
        </>
        
    );
}
export default AdminPage;