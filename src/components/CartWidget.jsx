import "./CartWidget.css"
import cartPic from "../assets/cart.svg"

function CartWidget() {
  return(
    <div id="cart-widget">
      <img src={cartPic} alt="buy cart" width="48"/>
      <span className="notification">5</span>
    </div>
  )
}

export default CartWidget