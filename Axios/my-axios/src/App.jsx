import React, { useEffect } from 'react';
import './App.css';
import axiosExample from './Components/axiosExample.js';


function App() {
  useEffect(() => {
    axiosExample();
  }, []);

  return <>
  <div><h1>Check Console for Axios Outputs</h1>
    </div></>;
}

export default App;
