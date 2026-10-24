import {Link} from "react-router-dom"
import "./Home.css";
import { Menu } from 'lucide-react';
import { useState } from "react";

function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    console.log("menu was clicked")
  }

  return (
    <>
      <div className="nav">
        <Link to={"/register"} className="authLink">Get Started →</Link>
          
        <img src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="logo" />
      </div>
      <div className="box">
        <h1>This is Home Page - Work in Progress! </h1>
      </div>
    </>
  );
}

export default Home;