import { useState } from "react"
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Base_Url } from "../utils/utils";


const Login = () => {
    const dispatch =useDispatch();
    const navigate =useNavigate();
    const[signIn, setSignIn]=useState(true)
    const[firstName, setFirstName]=useState("");
    const[lastName, setlastName]=useState("")
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
        setEmail("")
        setPassword("");
        return navigate("/list")

       }catch(err){
        setErr(err?.response?.data || "Something went wrong")
        

       }
       
    }

    const handleSignup = async () => {
      try {
          const res = await axios.post(Base_Url + "/signup", {
              firstName,
              lastName,
              emailId,
              password,
          },{withCredentials:true});

          dispatch(addUser(res.data));
          setEmail("");
          setPassword("");
          setFirstName("");
          setlastName("");
          return navigate("/list");
          

      } catch (err) {
          setErr(err?.response?.data || "Something went wrong");
      }
  };

    const handleTogglePage = () => {
      setSignIn(!signIn); // Toggle between Login and Signup
  };
    
  return (

    <div className="flex justify-center">
      
      <div className="card bg-primary text-primary-content w-[500px] mt-32 flex justify-center ">
      <div className="card-body">
      <h2 className="card-title flex justify-center text-6xl">{signIn ? "LogIn Page" : "Signup Page"}</h2>
      {signIn ? null : <>
<div>
<span className="label-text text-white">First Name</span>
      <input 
     onChange={(e)=>setFirstName(e.target.value)} 
     type="text"
      placeholder="first Name" 
      className="input input-bordered w-full text-black " />

</div>

<div className="mt-2">
<span className="label-text text-white ">Last Name</span>
     <input 
     onChange={(e)=>setlastName(e.target.value)} 
     type="text"
      placeholder="Last Name" 
      className="input input-bordered w-full text-black  " />

</div> </>}
      
      <div className="justify-center">

      <label className="form-control w-full ">
      <div className="label">
       <span className="label-text text-white">Enter your email address</span>
    
      </div>
     <input 
     onChange={(e)=>setEmail(e.target.value)} 
     type="text"
      placeholder="Email Id" 
      className="input input-bordered w-full text-black " />
     </label>

     <label className="form-control w-full mt-2 ">
      <div className="label">
       <span className="label-text text-white">Enter your Password</span>
    
      </div>
     <input 
     onChange={(e)=>setPassword(e.target.value)}
     type="password" 
     placeholder="Password" 
     className="input input-bordered w-full mb-4 text-black" />
     </label>


      </div>
     
      <div className="card-actions justify-center">
      <button 
      onClick={signIn ? handleLogin : handleSignup}
      className="btn w-full text-gray-700">{signIn ? "Login " : "Signup "}</button>

    </div>
    <p  onClick={()=>handleTogglePage()} className="mt-2 hover:text-white cursor-pointer">
    {signIn ? "New to the app Signup?" : "Already a user? Login."}</p>
    {err&&
    <p className="text-red-500 text-xl">{err}</p>}
    

  </div>
  
</div>
    </div>
  )
}

export default Login
