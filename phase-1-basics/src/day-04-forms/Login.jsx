import React from 'react'
import './Login.css'
import { useState } from 'react'
function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [error, setError] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(username);
        console.log(password);
        
        //validation
        if(!username || !password){
            setError("Please fill all fields");
            return;
        }
        setError("")
        setIsLoggedIn(true);
        
    }
  return (
    <div>
        <form className='login-form' onSubmit={handleSubmit}>
        <div className='input-field'>
            <label>Username</label>
        <input 
            type="text"
            value={username}
            onChange={(e) => {
                setUsername(e.target.value);
                setIsLoggedIn(false);
            }}
            
        />
        </div>
        <div className='input-field'>
            <label>Password</label>
            <input 
            type="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
                setIsLoggedIn(false);
            }
            }
            
        />
        </div>
        

        <button type="submit">Login</button>
        </form>

        {error && <p style={{color:"red"}}>{error}</p>}

        {isLoggedin && (
            <div>
                <p>Entered: </p>
                <p>Username: {username}</p>
                <p>Password: {"*".repeat(password.length)}</p>
            </div>
            )
        }
        
    </div>
  )
}

export default Login