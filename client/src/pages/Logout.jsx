import "./Home.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Logout(){

    const navigate = useNavigate();

    const handleClick = async () => {
        try{
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,
                {},
                { withCredentials: true }
            );
            if(response.status === 200){
                console.log(response)
                toast.success("Logout successful!");
                navigate("/login");
            }
        }catch(error){
            console.log("Logout error : ", error)
        }
    }

    return (
        <div className="logout-btn">
            <button onClick={handleClick}>LogOut</button>
        </div>
    )
}