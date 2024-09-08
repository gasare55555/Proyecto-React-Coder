import "./NavLogo.css"
import logoPic from "../assets/logo-transparent.png"


function NavLogo() {
  return(
    <a id="logo" className="navbar-brand" href="#">
      <img src={logoPic} alt="Gaming World" width="58" />
    </a>
  )
}

export default NavLogo