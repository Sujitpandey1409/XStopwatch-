import React, { useState } from "react";
import './FullNameDisplay.css'
const FullNameDisplay = () => {
  const [fName, setFname] = useState();
  const [LName, setLname] = useState();
  const [fullName, setFullname] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (fName && LName) {
      setFullname(fName + " " + LName);
    }
  };

  return (
    <div className="formContainer">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="Fname">First Name</label>
        <input id="Fname" onChange={(e) => {setFname(e.target.value)}}></input>
        <label htmlFor="Lname">Last Name</label>
        <input id="Lname" onChange={(e) => {setLname(e.target.value)}}></input>
        <button onClick={handleSubmit}>Submit</button>
      {fullName && <>Full Name :{fullName}</> }
      </form>
    </div>
  );
};

export default FullNameDisplay;
