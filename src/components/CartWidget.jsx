import "./CartWidget.css";
import cartPic from "../assets/cart.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const {cart} = useContext(CartContext);
  return(
    <div id="cart-widget">
      <Link to={"/cart"}>
        <img src={cartPic} alt="buy cart" width="48"/>
      </Link>
      <span className="notification">{cart.length}</span>
    </div>
  );
}

export default CartWidget;