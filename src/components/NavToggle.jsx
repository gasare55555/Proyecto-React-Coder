import "./NavToggle.css"

function NavToggle() {
  return(
    <button id="toggle-button" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  )
}

export default NavToggle