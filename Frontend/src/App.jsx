import React, { useState,useEffect } from 'react'
import Login from './components/Login';
import axios from 'axios'
const App = () => {
const[data , setData] = useState('');

const getData = async ()=>{
  const responce  = await axios.get('http://localhost:3000/');
  setData(responce.data);
}

useEffect(()=>{
  getData();
},[]);


  return (
    <>
    
    <div>
      <Login/>
    </div>
    </>
  )
}

export default App