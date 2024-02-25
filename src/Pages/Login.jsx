import React, { useState } from "react";
import './Login.css'

const LogIn = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [validCredentials, setvalidCredentials] = useState(true);
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && password) {
      if (id != "user" || password != "password") {
        setvalidCredentials(false);
      } else {
        setIsLogged(true);
      }
    }
  };
  return (
    <div className="formContainer">
      <h1>Login Page</h1>
      {!validCredentials && <p>Invalid username or password</p>}
      {!isLogged ? (
        <form onClick={handleSubmit} className="form">
          <label htmlFor="email">Username</label>
          <input
            onChange={(e) => setId(e.currentTarget.value)}
            id="email"
            type="email"
            placeholder="username "
          />
          <label htmlFor="password">Password </label>
          <input
            onChange={(e) => setPassword(e.currentTarget.value)}
            id="password"
            type="password"
            placeholder="password"
          />
          <div className="buttonContainer">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      ) : (
        <p>Welcome, user!</p>
      )}
    </div>
  );
};

export default LogIn;
