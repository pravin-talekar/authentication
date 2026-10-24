import "./Login.css"
import { useState } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(){

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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
    const startTime = Date.now();

    const serverUrl = import.meta.env.VITE_SERVER_URL;


    try{
      setLoading(true);
      const response = await axios.post(`${serverUrl}/api/auth/register`, data);
    
        toast.success("Register Successful!", {
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
            navigate("/login");
          },
        });
      
    }catch(err){
      console.error("Register failed:", err);

      toast.error(
      err.response?.data?.message || "Register failed. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          transition: Bounce,
        }
      );
    }finally {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 700 - elapsedTime);

      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    }
  }

  return (
    <div className="container">
      <div className="left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs8wxfY2hDe8S36yGsE2P8x5rNVz38xnbMbwIHKLcD3g&s=10" alt="logo" />
      </div>

      <div className="right">
        <h1>Register Here</h1>
        <form onSubmit={handleSubmit}>

          <input type="username"
          placeholder="Enter Username"
          name="username"
          value={data.username}
          onChange={handleChange}
          />

          <input type="email"
          placeholder="Enter Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          />

          <input type="password"
          placeholder="Enter Password"
          name="password"
          value={data.password}
          onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="loader"></span>
                  Registering...
              </>
              ) : ("Register")}
          </button>
        </form>
        <div className="end">
          Already have an account?{" "}
          <Link to="/login" className="endLink">
            LogIn
          </Link>
        </div>
      </div>
    </div>
  )
}