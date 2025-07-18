// src/services/api.js

import axios from 'axios';

// Create Axios instance with default base config
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // Optional: timeout after 10s
});

// You can add interceptors here if needed
// api.interceptors.request.use(config => {
//   // Example: attach token
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default api;
