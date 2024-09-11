import "./NavLogo.css"
import logoPic from "../assets/logo-transparent.png"


function NavLogo() {
  return(
    <a className="navbar-brand" href="#">
      <img src={logoPic} alt="Gaming World" width="64px" />
    </a>
  )
}

export default NavLogo