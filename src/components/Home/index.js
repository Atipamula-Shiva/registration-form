import { useNavigate } from "react-router-dom"
import "./style.css"

const Home=()=>{
    const userName=JSON.parse(localStorage.getItem("user"))
    let name=userName.name
    const navigate=useNavigate()
    const onLogout=()=>{
        localStorage.removeItem("user")
        navigate("/login")
    }
    return (
        <div className="homecon">
            <h1>Home Page</h1>
            <p className="namep"> Welcome {name}</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    )
}
export default Home