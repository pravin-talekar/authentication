import './App.css'
import {Route, Routes} from "react-router-dom";
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';

import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

 return (
    <>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App
