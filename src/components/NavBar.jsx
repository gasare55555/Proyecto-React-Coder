import CartWidget from "./CartWidget"
import NavLinks from "./NavLinks"
import NavLogo from "./NavLogo"
import NavToggler from "./NavToggler"
import "./NavBar.css"

function NavBar() {
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLogo />
        <div id="cart-toggle" className="d-flex">
          <CartWidget />
          <NavToggler />
        </div>
        <NavLinks />
      </div>
    </nav>
  )
}

export default NavBar