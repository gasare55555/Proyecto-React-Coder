import "./Checkout.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartTotal from "./CartTotal";

function Checkout() {
  const {cart, removeItem} = useContext(CartContext);

  return (
    <div className="checkout-container">
        {cart.length ?
        <div className="checkout-upper-side">
          <div className="cart-items-container">
            <h3 className="cart-title">Cart</h3>
            {cart.map((item) => <CartItem key={item.id} item={item} removeItem={removeItem} />)}
          </div>
          <div className="cart-total-container">
            <h3 className="cart-title">Summary</h3>
            <CartTotal />
          </div>
        </div> :
        <h4 style={{paddingTop: "96px"}}>Cart is empty</h4>
        } 
      
    </div>
  );
}

export default Checkout;