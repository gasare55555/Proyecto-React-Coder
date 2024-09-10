import CartWidget from "./CartWidget"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"
import NavToggle from "./NavToggle"
import "./NavBar.css"

function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLogo />
        <div className="d-flex">
          <NavLinks />
          <CartWidget />
          <NavToggle />
        </div>
      </div>
    </nav>
  )
}

export default NavBar