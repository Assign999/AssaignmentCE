// src/App.jsx
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Layout from './pages/dashboard/Layout';
import Posts from './pages/dashboard/Posts';
import Users from './pages/dashboard/Users';
import Media from './pages/dashboard/Media';
import Profile from './pages/dashboard/Profile';
import PrivateRoute from './components/PrivateRoute';

import { ThemeContext } from './contexts/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route path="posts" element={<Posts />} />
            <Route path="users" element={<Users />} />
            <Route path="media" element={<Media />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
