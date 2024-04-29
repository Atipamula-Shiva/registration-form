import { useState } from "react"
import {Link} from "react-router-dom"
import "./style.css"

const SignUp=()=>{
    const [name,setName]=useState("")
    const [mail,setMail]=useState("")
    const [password,setPassword]=useState("")
    const [number,setNumber]=useState("")


    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const mailChange=(e)=>{
        setMail(e.target.value)
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const numChange=(e)=>{
        setNumber(e.target.value)
    }

    const formSubmit=(e)=>{
        e.preventDefault()
        if (name==="" && mail==="" && password==="" && number===""){
            alert("Enter the Empty Field")
        }else{
            let personDetails={
                name,mail,password,number
            }
            
            localStorage.setItem("user",JSON.stringify(personDetails))
            alert("Signup success")
        }
    }
    return(
        <div>
            <form onSubmit={formSubmit} className="formcon">
                <h1 className="title">Signup</h1>
                <div className="inputCon">
                <label for="name">Full name</label>
                <input onChange={nameChange} className="inputClass" id="name"/>
                </div>
                <div className="inputCon">
                <label for="email">Email ID</label>
                <input onChange={mailChange} className="inputClass" id="email"/>
                </div>
                <div className="inputCon">
                <label for="password">Password</label>
                <input onChange={passwordChange} className="inputClass" type="password" id="password"/>
                </div>
                <div className="inputCon">
                <label for="mobile">Mobile Number</label>
                <input onChange={numChange} className="inputClass" id="mobile"/>
                </div>
                <button type="submit" className="button">Sign Up</button>
                <p><Link to="/login">Click here to <span>Login</span></Link></p>
            </form>
        </div>
    )
}

export default SignUp