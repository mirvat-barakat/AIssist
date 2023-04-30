import React, { useState } from 'react';
// import './App.css';
import { Routes, Route, Router } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import AdminPannelPage from './pages/AdminPanelPage';
import ViewUsersPage from './pages/ViewUsersPage';
import AddSpecialistsPage from './pages/AddSpecialistsPage';
import ViewSpecialistsPage from './pages/ViewSpecialistsPage';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LoginPage  />} />
    //   <Route path="/admin" element={<AdminPannelPage />} />
    //   <Route path="/view_users" element={<ViewUsersPage />} />
    //   <Route path="/add_specialists" element={<AddSpecialistsPage />} />
    //   <Route path="/view_specialists" element={<ViewSpecialistsPage />} />
    //   <Route path="*" element={<div>404</div>} />
    // </Routes>
    // <LoginPage/>
    // <AddSpecialistsPage/>
    // <AdminPannelPage/>
    <ViewSpecialistsPage/>
    // <ViewUsersPage/>
    
  );
}

export default App;
