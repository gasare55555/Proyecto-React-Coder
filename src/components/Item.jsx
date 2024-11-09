import { Link } from "react-router-dom";
import "./Item.css";
import CustomButton from "./CustomButton";

function Item({product}) {
  return (
    <div className="col home-col mb-4">
      <div className="card h-100" >
        <img src={product.cover} className="card-img-top" alt={`${product.name} cover image`} />
        <div className="card-body">
          <h2 className="card-title fs-p fw-light">{product.name}</h2>
          <div>
            <h3 className="card-text fs-5 fw-normal">${product.price.toFixed(2)} USD</h3>
            <Link to={`/item/${product.id}`}>
              <CustomButton type="button" content="Details" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;