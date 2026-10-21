import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import axios from "axios";
import './App.css'


function App() {

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
    })
    .catch((error) => {
      console.log(error)
      alert("Enter registere user");
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Please Register Here!!!</h1>
      <input 
      type="email" 
      name="email" 
      placeholder='enter your email'
      value={data.email} 
      onChange={handleChange}
      /><br /><br />

      <input 
      type="password" 
      name='password' 
      placeholder='enter your password'
      value={data.password} 
      onChange={handleChange}
      /><br /><br />
      <button>Submit</button>
    </form>
  )
}

export default App
