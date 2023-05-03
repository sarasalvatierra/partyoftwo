import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import Users from './screens/Users';
import Campaigns from './screens/Campaigns';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="users" element={<Users />} />
      <Route path="campaigns" element={<Campaigns />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
