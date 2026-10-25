import "./Login.css"
import { useState } from "react"
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({setUser}){

  const [data, setData] = useState({
    email: "",
    password: ""
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
      const response = await axios.post(`${serverUrl}/api/auth/login`, data);

      console.log("Response : ",response.data.user.username);
      console.log("Response : ",response.data.user.email);

      setUser({
        username: response.data.user.username,
        email: response.data.user.email
      })
    
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

      toast.error(
      err.response?.data?.message || "Login failed. Please try again.",
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
        <h1>Login Here</h1>
        <form onSubmit={handleSubmit}>

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
                  Logging in...
              </>
              ) : ("LogIn")}
          </button>
        </form>
        <div className="end">
          Don't have an account?{" "}
          <Link to="/register" className="endLink">
            Register
          </Link>
        </div>
      </div>
    </div>
  )
}