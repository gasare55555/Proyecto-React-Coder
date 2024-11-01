import "./Checkout.css";
import CartItem from "./CartItem";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartTotal from "./CartTotal";
import CartForm from "./CartForm";
import CustomButton from "./CustomButton";


function Checkout() {
  const {cart, calculateTotalPrice, addItem2, getOrders, removeItem, clear} = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formDisplay, setFormDisplay] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const price = calculateTotalPrice();
    console.log(`price ${price}`);
    setTotalPrice(price);
  }, [cart]);

  function navigateHome() {
    navigate("/");
  }

  function clearCart() {
    clear();
  }

  console.log("Checkout re-render ", totalPrice );

  return (
    <div className="checkout-container">
        {cart.length ?

          <div className="checkout-upper-side">
            <div className="cart-items-container">
              <h3 className="cart-title">Cart</h3>
              {cart.map((item) => <CartItem key={item.id} item={item} addItem2={addItem2} removeItem={removeItem} />)}
              <div className="cart-extra-buttons">
                <CustomButton action={navigateHome} content={"Keep Buying"} type={"button"} />
                <CustomButton action={clearCart} content={"Clear Cart"} type={"button"} />
              </div>
            </div>

            <div className="checkout-left-side">
              <div className="cart-total-container">
                <h3 className="cart-title">Summary</h3>
                <CartTotal totalPrice={totalPrice} setFormDisplay={setFormDisplay} />
              </div>
              
              {formDisplay && 
              <div className="cart-form-container">
                <h3 className="cart-title">Form</h3>
                <CartForm totalPrice={totalPrice} getOrders={getOrders} clear={clear} />
              </div>}
            </div>

          </div> :

          <div>
            <h4 style={{paddingBlock: "120px"}}>Cart is empty</h4>
            <CustomButton action={navigateHome} content={"Keep Buying"} type={"button"} />
          </div>
        } 
      
    </div>
  );
}

export default Checkout;