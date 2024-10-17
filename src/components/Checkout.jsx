import "./Checkout.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const {cart, removeItem} = useContext(CartContext);

  return (
    <div className="cart-items-container">
      <h4 className="cart-title">Cart</h4>
        {cart.length ?
        cart.map((item) => <CartItem key={item.id} item={item} removeItem={removeItem} />) :
        <h4 style={{paddingTop: "64px"}}>Cart is empty</h4>
        } 
      
    </div>
  );
}

export default Checkout;