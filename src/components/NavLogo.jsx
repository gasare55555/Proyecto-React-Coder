import { Link } from "react-router-dom"
import "./NavLogo.css"
import logoPic from "../assets/logo.svg"


function NavLogo() {
  return(
    <Link to={'/'} className="navbar-brand">
      <img src={logoPic} alt="Gaming World" />
    </Link> 
  )
}

export default NavLogo