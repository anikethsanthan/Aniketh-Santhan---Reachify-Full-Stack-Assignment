import { useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Base_Url } from "../utils/utils";


const Login = () => {
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const[emailId,setEmail]=useState("");
    const[password, setPassword]= useState("");
    const [err,setErr]= useState("");

    const handleLogin=async()=>{
       try{
        const res= await axios.post(Base_Url +"/login",{
            emailId,
            password,
        },{withCredentials:true})

       
        dispatch(addUser(res.data))
        setEmail(" ")
        setPassword(" ");
        return navigate("/list")

       }catch(err){
        setErr(err?.response?.data || "Something went wrong")
        

       }
       
    }
    
  return (
    <div className="flex justify-center">
      <div className="card bg-primary text-primary-content w-[500px] mt-40 flex justify-center ">
      <div className="card-body">
      <h2 className="card-title flex justify-center text-6xl">Login Page</h2>


      <div className="justify-center">

      <label className="form-control w-full ">
      <div className="label">
       <span className="label-text text-white">Enter your email address</span>
    
      </div>
     <input 
     onChange={(e)=>setEmail(e.target.value)} 
     type="text"
      placeholder="Email Id" 
      className="input input-bordered w-[95%] text-black " />
     </label>

     <label className="form-control w-full mt-4 ">
      <div className="label">
       <span className="label-text text-white">Enter your Password</span>
    
      </div>
     <input 
     onChange={(e)=>setPassword(e.target.value)}
     type="password" 
     placeholder="Password" 
     className="input input-bordered w-[95%] mb-4 text-black" />
     </label>


      </div>
     
      <div className="card-actions justify-center">
      <button 
      onClick={handleLogin}
      className="btn w-[300px] text-gray-700">LogIn</button>
    </div>
    {err&&
    <p className="text-red-500 text-xl">{err}</p>}

  </div>
  
</div>
    </div>
  )
}

export default Login
