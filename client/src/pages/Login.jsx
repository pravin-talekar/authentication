import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css"

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
    console.log("Form Was Submited : ", data);

    const serverUrl = import.meta.env.VITE_SERVER_URL;

    console.log(serverUrl)


      await axios.post(`${serverUrl}/api/auth/login`, data)
      .then((res) => {
        console.log("Login Successful");
        alert("User LoggedIn Successfuly");
        navigate("/")
      })
      .catch((err) => {
        console.log(error);
      alert("Error during login")
      })
  }

  return (
    <div className="container">
      <div className="left">
        <img src="https://plus.unsplash.com/premium_photo-1690294614341-cf346ba0a637?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="logo" />
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