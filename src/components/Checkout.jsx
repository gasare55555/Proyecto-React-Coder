import "./Checkout.css";
import CartItem from "./CartItem";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartTotal from "./CartTotal";
import CartForm from "./CartForm";

function Checkout() {
  const {cart, calculateTotalPrice, addItem2, removeItem} = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    const price = calculateTotalPrice();
    console.log(`price ${price}`);
    setTotalPrice(price);
  }, [cart]);

  console.log("Checkout re-render ", totalPrice );

  return (
    <div className="checkout-container">
        {cart.length ?

        <div className="checkout-upper-side">
          <div className="cart-items-container">
            <h3 className="cart-title">Cart</h3>
            {cart.map((item) => <CartItem key={item.id} item={item} addItem2={addItem2} removeItem={removeItem} />)}
          </div>

          <div className="checkout-left-side">
            <div className="cart-total-container">
              <h3 className="cart-title">Summary</h3>
              <CartTotal totalPrice={totalPrice} />
            </div>
            <div className="cart-form-container">
              <h3 className="cart-title">Form</h3>
              <CartForm />
            </div>
          </div>

        </div> :
        <h4 style={{paddingTop: "96px"}}>Cart is empty</h4>
        } 
      
    </div>
  );
}

export default Checkout;