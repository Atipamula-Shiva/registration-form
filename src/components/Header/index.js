// import { useState } from "react"
import { Link } from "react-router-dom"
import "./style.css"

const Header=()=>{

    return (
        <div className="headContainer">
            <h1 className="headTe">naukri</h1>
            <div className="linkcon">
                {/* <p className="plink"><Link to="/login">Login</Link></p>
                <p className="plink"><Link to="/signup">Signup</Link></p> */}
                <p className="plink"><Link to="/">Home</Link></p>
            </div>
        </div>
    )
}

export default Header