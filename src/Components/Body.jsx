/* eslint-disable no-unused-vars */

import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'
import axios from 'axios'
import { Base_Url } from '../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from "../utils/userSlice";
import { useEffect } from 'react'

const Body = () => {
  const dispatch= useDispatch();
  const navigate =useNavigate();
  const userData= useSelector((store)=>store.user)


  const fetchUser= async()=>{
    if(userData) return; 
    try{const user= await axios.get(Base_Url+"/profile/view" ,{withCredentials:true})

    dispatch(addUser(user.data))
  } catch(err){ 
    if(err.status===401){
      navigate("/login");
    }
    
    console.log(err)}
  }

  useEffect(()=>{
    
      fetchUser()
    
    
  },[])
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Body
