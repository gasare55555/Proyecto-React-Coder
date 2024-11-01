import "./CartWidget.css";
import cartPic from "../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const {getCartQuantity} = useContext(CartContext);
  return(
    <div id="cart-widget">
      <Link to={"/cart"} className="cart-widget-link">
        <img src={cartPic} alt="buy cart" width="48"/>
      </Link>
      <span className="notification">{getCartQuantity()}</span>
    </div>
  );
}

export default CartWidget;