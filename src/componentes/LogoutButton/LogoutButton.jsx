import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";



export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    navigate("/"); 
  };

  return (
    
    <Button
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1 rounded" >
       <BiLogOut className="mr-2 text-2xl" />


      Logout
   

    </Button>

    
  );
}