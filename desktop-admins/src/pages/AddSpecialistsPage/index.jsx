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
        </>
    )
}

export default AddSpecialists;