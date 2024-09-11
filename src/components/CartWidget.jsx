import "./CartWidget.css"
import cartPic from "../assets/cart.png"

function CartWidget() {
  return(
    <div id="cart-widget">
      <img src={cartPic} alt="buy cart" width="52"/>
      <span className="notification">5</span>
    </div>
  )
}

export default CartWidget