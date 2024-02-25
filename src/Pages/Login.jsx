import React, { useState } from 'react';

const LogIn = () => {
    const[isLogged, setIsLogged] = useState(false)
    const[validCredentials, setvalidCredentials] = useState(true)
    const[id, setId] = useState()
    const[password, setPassword] = useState()
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (id && password){
            if(id!='user' || password!='password'){
                setvalidCredentials(false)
            }
            else{
                setIsLogged(true)
            }
        }
    }
    return ( 
       <div className="form-container">
        <h1>Login Page</h1>
        {!validCredentials && <p>Invalid username or password</p>}
        {!isLogged?<form onClick={handleSubmit} className='form'>
            <label htmlFor='email'>Username</label>
            <input id='email' type='email' placeholder='username '/>
            <label htmlFor='password'>Password </label>
            <input id='password' type='password' placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </form>:<p>Welcome, user!</p>}
       </div> 
     );
}
 
export default LogIn;