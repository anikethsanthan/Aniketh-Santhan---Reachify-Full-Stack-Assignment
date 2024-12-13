import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import listReducer from "./listSlice"



const appStore =configureStore({

    reducer:{
        user:userReducer,
        list:listReducer
    }
})

export default appStore;