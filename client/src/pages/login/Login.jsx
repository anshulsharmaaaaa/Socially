import { Link } from "react-router-dom"
import "./login.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const Login=()=>{
    const {login}=useContext(AuthContext)
    const handleLogin=()=>{
        login()
    }
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Socially</h1>
                    <p>
                       Connecting Friends n Families
                       Made with Love by 
                       Anshul Sharma
                    </p>
                    <span>Don't have an account</span>
                    <Link to='/register'>
                    <button>Register</button>
                    </Link>
                   
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button onClick={handleLogin}>Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
 