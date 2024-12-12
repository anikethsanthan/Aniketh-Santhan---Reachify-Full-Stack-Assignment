import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { Base_Url } from "../utils/utils";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Header = () => {
  const user= useSelector((store)=>store.user);
  const dispatch= useDispatch();
  const navigate= useNavigate();
  console.log(user); 
const handleLogout= async()=>{
  // eslint-disable-next-line no-unused-vars
  const logout = await axios.post(Base_Url+"/logout",{},{withCredentials:true});

  dispatch(removeUser())
  navigate("/login")
}

  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link to="/list" className="btn btn-ghost text-xl">To-Do App</Link>
    </div>

    {user&&
    <div className="flex-none gap-2">
      <div className="form-control">
        <p>{"Welcome "+user.firstName +" "+user.lastName}</p>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <Link to="/Profile" className="justify-between">
              Profile
              
            </Link>
          </li>
          
          <li onClick={handleLogout}><a>Logout</a></li>
        </ul>
      </div>
    </div>}
  </div>
  )
}

export default Header
