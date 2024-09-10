import "./CartWidget.css"
import cartPic from "../assets/cart.png"

function CartWidget() {
  return(
    <div>
      <img src={cartPic} alt="buy cart" width="52"/>
    </div>
  )
}

export default CartWidget