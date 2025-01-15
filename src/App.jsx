import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import AddMember from './components/Admin/AddMember';
import AllMembers from './components/Admin/AllMembers';
import Navbar from './components/Common/Navbar';
import MemberDetails from './components/Member/MemberDetails';

// Define ProtectedRoute for private routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />

        {/* Protected routes */}
        <Route
          path="/admin/allMembers"
          element={<ProtectedRoute><AllMembers /></ProtectedRoute>}
        />
        <Route
          path="/member/details"
          element={<ProtectedRoute><MemberDetails /></ProtectedRoute>}
        />
        <Route
          path="/admin/addMember"
          element={<ProtectedRoute><AddMember /></ProtectedRoute>}
        />

        {/* Redirect to login by default */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
