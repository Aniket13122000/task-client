import React,{useState} from 'react'
import './Register.css'
import Axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message,setmessage]=useState('')
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setmessage('')
      // Add your authentication logic here
      Axios.post(`http://localhost:8080/register`, {
        email: username,
        password: password,
        
      }).then((response)=>{
        console.log(response.data);
        localStorage.setItem('token', response.data);
        navigate("/dashboard");

      }).catch((err)=>{
        console.log(err);
      })
    setTimeout(() => {
      setmessage('Something gone wrong please try again in some time')
    }, 5000);
    };
  return (
    <>
    <div className='login_container'>
 

 <div className="login-container">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      {message}
      <p><NavLink to='/login'>SignIn</NavLink> for Existing Account</p>

    </div>
    </div>

    </>
  )
}

export default Register