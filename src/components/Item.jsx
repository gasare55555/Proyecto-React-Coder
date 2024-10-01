import { Link } from "react-router-dom";
import "./Item.css";

function Item({product}) {
  return (
    <div className="col mb-4">
      <div className="card h-100" >
        <img src={product.cover} className="card-img-top" alt={`${product.name} cover image`} />
        <div className="card-body">
          <div>
            <h6 className="card-title">{product.name}</h6>
            <h5 className="card-text">{product.price}</h5>
          </div>
          <Link to={`/item/${product.id}`} id="card-button" className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Item;