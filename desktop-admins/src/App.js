import React, { useState } from 'react';
// import './App.css';
import { Routes, Route, Router } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import AdminPannelPage from './pages/AdminPanelPage';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPannelPage />} />
      </Routes>
  );
}

export default App;
