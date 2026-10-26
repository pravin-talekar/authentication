// import './App.css'
import {Route, Routes} from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {

  const [user, setUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try{
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/auth/me`,
          {withCredentials: true}
        )

        console.log("In a App.js response : ", response);
      }catch(error){
        console.log(
          "Auth check failed:",
          error.response?.status,
          error.response?.data
        );
      }
    }

    checkUser()
  }, [])

 return (
    <>
     <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App
