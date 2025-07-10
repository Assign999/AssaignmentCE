import React, { createContext, useState, useEffect } from 'react';
/* eslint-disable react-refresh/only-export-components */
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    isLoggedIn: false
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.isLoggedIn) {
      setUser(storedUser);
    }
  }, []);

  const login = (name, email) => {
    const userData = { name, email, isLoggedIn: true };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser({ name: '', email: '', isLoggedIn: false });
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
