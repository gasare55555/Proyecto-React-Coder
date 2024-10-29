import CartWidget from "./CartWidget";
import NavCategory from "./NavCategory";
import NavLogo from "./NavLogo";
import NavToggler from "./NavToggler";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <NavLogo />

        <div id="cart-toggle" className="d-flex">
          <CartWidget />
          <NavToggler />
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavCategory id="popular" name="Popular Now" />
            <NavCategory id="anticipated" name="Most Anticipated" />
            <NavCategory id="educational" name="Educational" />
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar;