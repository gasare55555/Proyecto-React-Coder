import "./NavLogo.css"
import logoPic from "../assets/logo.svg"


function NavLogo() {
  return(
    <a className="navbar-brand" href="#">
      <img src={logoPic} alt="Gaming World" />
    </a>
  )
}

export default NavLogo