import React, { useState } from 'react';
import '../styles/Login.css';
import Header from './Header';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaLock, FaLockOpen } from "react-icons/fa";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
      if (response.data === "Success") {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <main>
      <Header />
      <div className="page-header"></div>
      <main id='sign'>
        <div className='wrappers'>
          <form className='input-form' onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            <div className="field-box">
              <input 
                type="email" 
                className="field animation"  
                placeholder='Email' 
                onChange={(e) => setEmail(e.target.value)} 
                required
                autoComplete="username"
              />
              <FaUser className='icon'/>
            </div>
            <div className="field-box">
              <input 
                type={passwordVisible ? "text" : "password"} 
                className="field animation" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <div className='icon' onClick={togglePasswordVisibility}>
                {passwordVisible ? <FaLockOpen /> : <FaLock />}
              </div>
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox"/>Remember me</label>
              <NavLink to="/login">Forgot Password?</NavLink>
            </div>

            <button className='butns animation' id='submit' type="submit">Sign In</button>
          </form>
        </div>
      </main>
      <Footer />
    </main>
  );
};

export default Login;
