import "./NavBar.css"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"
import NavToggle from "./NavToggle"

function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLogo />
        <NavToggle />
        <NavLinks />
      </div>
    </nav>
  )
}

export default NavBar