import React , {useState, useEffect} from "react";
import Sidebar from "../../components/Sidebar";
import axios from "axios";
import "./styles.css";

const Community = () => {

    return(
        <>
        <div className="body">
        <Sidebar/>
        <div className="title1">
          <h1>Community Moderation</h1>
        </div>
        </div>
        </>
    );

};

export default Community;