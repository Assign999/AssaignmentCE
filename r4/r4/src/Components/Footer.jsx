import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';
import { UserContext } from '../Contexts/UserContext';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <footer>
      <p>Current Theme: {theme}</p>
      <p>{user.isLoggedIn ? `Logged in as: ${user.email} `: 'Not logged in'}</p>
    </footer>
  );
};

export default Footer;