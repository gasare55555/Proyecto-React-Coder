import { NavLink } from "react-router-dom";
import "./NavCategory.css";

function NavCategory({id, name}) {
  return (
    <li className="nav-item">
      <NavLink to={`/category/${id}`} className="nav-link p-size"  aria-current="page">{name}</NavLink>
    </li>
  )
}

export default NavCategory;