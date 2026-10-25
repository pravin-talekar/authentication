// import './App.css'
import {Route, Routes} from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {

  const [user, setUser] = useState(null);

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
