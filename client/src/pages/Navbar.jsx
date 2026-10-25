import { useState } from "react"
import {Link} from "react-router-dom"

export default function Navbar({user}){

  const [click, setClick] = useState(false);

  const handleClick = () =>{
    setClick(true);
    console.log("clicked")
  }

    return (
        <div className="nav">
        <Link to={"/register"} className="authLink">Get Started →</Link>
          
          <img onClick={handleClick} src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="logo" />
      </div>
    )
}