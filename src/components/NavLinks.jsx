import "./NavLinks.css"

function NavLinks() {
  return(
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Juegos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Consolas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Accesorios</a>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks