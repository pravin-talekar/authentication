import axios from "axios";
import { useState } from "react"

export default function Login(){

  const [data, setData] = useState({
    email: "",
    password: ""
  });

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
      })
      .catch((err) => {
        console.log(error);
      alert("Error during login")
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login Here</h1>
      <input type="email"
      placeholder="enter email"
      name="email"
      value={data.email}
      onChange={handleChange}
      /> <br /><br />

      <input type="password"
      placeholder="enter password"
      name="password"
      value={data.password}
      onChange={handleChange}
      /> <br /><br />

      <button>LogIn</button>
    </form>
  )
}