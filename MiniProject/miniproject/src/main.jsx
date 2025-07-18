// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthProvider } from './contexts/AuthContext';
import { ThemeProviderCustom } from './contexts/ThemeProviderCustom';
import './index.css'; // Optional: Include global styles here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProviderCustom>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProviderCustom>
  </React.StrictMode>
);
