import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OpenRoles from './pages/OpenRoles';
import RoleDetails from './pages/RoleDetails';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      <Routes>
        <Route path="/" element={<OpenRoles />} />
        <Route path="/role/:id" element={<RoleDetails />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
