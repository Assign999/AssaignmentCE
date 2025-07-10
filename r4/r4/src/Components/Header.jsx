import React, { useContext } from 'react';
import { ThemeContext } from '../Contexts/ThemeContext';

const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header>
      <h1>MediaHub Dashboard</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;