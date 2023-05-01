import React, { useState } from 'react';
// import './App.css';
import { Routes, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import AdminPannelPage from './pages/AdminPanelPage';
import ViewUsersPage from './pages/ViewUsersPage';
import ViewSpecialistsPage from './pages/ViewSpecialistsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage  />} />
        <Route path="/admin" element={<AdminPannelPage />} />
        <Route path="/view_users" element={<ViewUsersPage />} />
        <Route path="/view_specialists" element={<ViewSpecialistsPage />} />
        <Route path="*" element={<div>404</div>} />
    </Routes>
    </Router>
    
    // <LoginPage/>
    // <AddSpecialistsPage/>
    // <AdminPannelPage/>
    // <ViewSpecialistsPage/>
    // <ViewUsersPage/>
    
  );
}

export default App;
