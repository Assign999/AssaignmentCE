import React, { useContext, useState } from 'react';
import { UserContext } from '../Contexts/UserContext';

const MainContent = () => {
  const { user, login, logout } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleLogin = () => {
    const { name, email } = formData;
    if (name && email) login(name, email);
  };

  if (user.isLoggedIn) {
    return (
      <div>
        <h2>Hello, {user.name}</h2>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default MainContent;