import "./Home.css"
import axios from "axios";
import { toast } from "react-toastify";

export default function Logout(){

    const handleClick = async () => {
        try{
            const response = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/api/auth/logout`,
                {},
                { withCredentials: true }
            );
            if(response.status === 200){
                toast.success("Logout successful!");
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