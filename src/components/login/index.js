import { useState } from "react"
import "./style.css"
import { useNavigate,Link } from "react-router-dom"

const Login=()=>{
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const onLogin=(e)=>{
        e.preventDefault()
        if (name==="" && password===""){
            alert("Enter the Empty field")
        }else{
            let getDetails=JSON.parse(localStorage.getItem("user"))
            if (getDetails===null){
                alert("User Doesn't exist Signup to Login")
            }
            else if (getDetails.name===name && getDetails.password===password){
                // alert("Login Success")
                navigate("/")
            }
            else{
                alert("Wrong name or password")
                let etDetails=JSON.parse(localStorage.getItem("uer"))
                console.log(etDetails)
            }
        }
       
    }
    return (
        <form onSubmit={onLogin} className="formcon">
        <h1 className="title">Login</h1>
        <div className="inputCon">
        <label for="name">Full name</label>
        <input onChange={nameChange} className="inputClass" id="name"/>
        </div>
        {/* <div className="inputCon">
        <label for="email">Email ID</label>
        <input className="inputClass" id="email"/>
        </div> */}
        <div className="inputCon">
        <label for="password">Password</label>
        <input onChange={passwordChange} className="inputClass" type="password" id="password"/>
        </div>
        {/* <div className="inputCon">
        <label for="mobile">Mobile Number</label>
        <input className="inputClass" id="mobile"/>
        </div> */}
        <button type="submit" className="button">Login</button>
        <p><Link to="/signup">Click Here to <span>Register</span></Link></p>
    </form>
    )
}

export default Login