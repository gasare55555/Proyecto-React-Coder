import "./NavBar.css"
import NavLinks from "./NavLinks"

function NavBar(){
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLinks />
      </div>
    </nav>
  )
}

export default NavBar