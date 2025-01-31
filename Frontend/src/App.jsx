import React, { useState,useEffect } from 'react'
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import './App.css';
const App = () => {

  return (
  <Router>
    <Routes>

    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>

  </Router>
  )
}

export default App