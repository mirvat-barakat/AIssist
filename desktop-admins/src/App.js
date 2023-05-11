import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import ViewUsersPage from './pages/ViewUsersPage';
import ViewSpecialistsPage from './pages/ViewSpecialistsPage';
import Community from './pages/CommunityModeration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage  />} />
        <Route path="/view_users" element={<ViewUsersPage />} />
        <Route path="/view_specialists" element={<ViewSpecialistsPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<div>404</div>} />
    </Routes>
    </Router>
    
  );
}

export default App;
