import React from "react";
import Login from "../../components/Login";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar"


const LoginPage = () => {
  localStorage.setItem("current_page", "login");

  return (
    <div>
      <Sidebar />
      <Header />
      <Login />
      
    </div>
  );
};

export default LoginPage;