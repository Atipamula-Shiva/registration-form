import React from "react"
import { Outlet, Navigate } from "react-router-dom"
const ProtectedRoutes=()=>{
    const check=localStorage.getItem("user")
    return check ? <Outlet/>:<Navigate to={"/login"}/>
}

export default ProtectedRoutes