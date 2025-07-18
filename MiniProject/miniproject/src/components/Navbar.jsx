import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <span>MediaHub</span>
      <div>
        <Link to="/dashboard/posts">Posts</Link>
        <Link to="/dashboard/users">Users</Link>
        <Link to="/dashboard/media">Media</Link>
        <Link to="/dashboard/profile">Profile</Link>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      <span>Welcome, {currentUser?.name}</span>
    </nav>
  );
};

export default Navbar;
