import React from "react";
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
const Nav = () => {
  const Navigate = useNavigate()  
  return (
    <div className="navbar">
      <p onClick={()=>{Navigate('/')}} >Stopwatch</p>
      <p onClick={()=>{Navigate('/displayName')}} >DisplayName</p>
      <p onClick={()=>{Navigate('/CounterApp')}} >CounterApp</p>
      <p onClick={()=>{Navigate('/XLogin')}} >XLogin</p>
    </div>
  );
};

export default Nav;
