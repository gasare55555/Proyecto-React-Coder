import "./CartTotal.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AddItemButton from "./AddItemButton";

function CartTotal() {
  const {calculateTotalPrice} = useContext(CartContext);
  return (
    <div className="card cart-total-container-inside">
      <div className="card-body cart-total">
        <div className="cart-total-price">
          <h4 className="card-title">Estimated total</h4>
          <h4 className="card-text">${calculateTotalPrice()}</h4>
        </div>
        <p className="card-text">Sales tax will be calculated during checkout where applicable</p>
        <AddItemButton content="Realizar compra" />
      </div>

    </div>
  );
}

export default CartTotal;