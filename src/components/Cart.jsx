import "./Cart.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {cart, removeItem} = useContext(CartContext);

  return (
    <div className="cart-items-container">
      <h4 className="cart-title">Cart</h4>
      {cart.map((item) => <CartItem key={item.id} item={item} removeItem={removeItem} />)}  
    </div>
  );
}

export default Cart;