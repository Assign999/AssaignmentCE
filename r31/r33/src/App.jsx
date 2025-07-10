import React from 'react'
import ReactDOM from 'react-dom';
import  './App.css'
import {BrowserRouter} from 'react-router-dom';
import Home from './Components/Home'
import Dashboard from './Components/Dahboard';
import About from './Components/About';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Navbar from './Components/Navbar';
import {Routes, Route} from 'react-router-dom';
function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
   
  </>
  )
}

export default App
