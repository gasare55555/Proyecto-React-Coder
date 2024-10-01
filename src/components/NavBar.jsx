import CartWidget from "./CartWidget";
import NavCategory from "./NavCategory";
import NavLogo from "./NavLogo";
import NavToggler from "./NavToggler";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLogo />

        <div id="cart-toggle" className="d-flex">
          <CartWidget />
          <NavToggler />
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavCategory id="popular" name="Popular Now" />
            <NavCategory id="most-anticipated" name="Most Anticipated" />
            <NavCategory id="explore" name="Explore" />
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default NavBar;