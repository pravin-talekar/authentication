import "./Login.css"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(){

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverUrl = import.meta.env.VITE_SERVER_URL;


    try{
      const response = await axios.post(`${serverUrl}/api/auth/login`, data);
    
        toast.success("Login Successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,

          onClose: () => {
            navigate("/");
          },
        });
      
    }catch(err){
      console.error("Login failed:", err);
    }
  }

  return (
    <div className="container">
      <div className="left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8wxfY2hDe8S36yGsE2P8x5rNVz38xnbMbwIHKLcD3g&s=10" alt="logo" />
      </div>

      <div className="right">
        <h1>Login Here</h1>
        <form onSubmit={handleSubmit}>

          <input type="email"
          placeholder="enter email"
          name="email"
          value={data.email}
          onChange={handleChange}
          />

          <input type="password"
          placeholder="enter password"
          name="password"
          value={data.password}
          onChange={handleChange}
          />

          <button>LogIn</button>
        </form>
      </div>
    </div>
  )
}