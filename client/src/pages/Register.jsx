import { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default function Register(){

     const [data, setData] = useState({
        email: "",
        password: ""
      });
      
      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget)
    
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        const serverUrl = import.meta.env.VITE_SERVER_URL;
        console.log(serverUrl)
    
        await axios.post(`${serverUrl}/api/auth/register`, data)
        .then((res) => {
          console.log("User Registered Successfuly");
          alert("User Registred Successfuly");
          setData({
            email: "",
            password: ""
          })
        })
        .catch((error) => {
          console.log(error)
          alert("Enter registere user");
        })
      }

    return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-icon">✦</div>

        <p className="register-tag">GET STARTED TODAY</p>

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Join us today! Enter your details to get started.
        </p>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={data.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={data.password}
              onChange={handleChange}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </div>

          <button type="submit" className="register-button">
            Create Account <span>→</span>
          </button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <Link to='/login'>Login</Link>
        </p>

        <div className="register-bottom-line"></div>
      </div>
    </div>
    )
}