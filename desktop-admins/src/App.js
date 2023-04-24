import React, { useState } from 'react';
// import './App.css';
import { Routes, Route, Router } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import AdminPannelPage from './pages/AdminPanelPage';
import ViewUsersPage from './pages/ViewUsersPage';
import AddSpecialistsPage from './pages/AddSpecialistsPage';

function App() {
  return (
      // <Routes>
      //   <Route path="/login" element={<LoginPage />} />
      //   <Route path="/admin" element={<AdminPannelPage />} />
      // </Routes>
      <div>
        <AddSpecialistsPage />
      </div>

  );
}

export default App;
