import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useCount } from "../hooks/useCount";
import ItemQuantitySelector from "./ItemQuantitySelector";


function CartItem({item, removeItem}) {
  const {addItem} = useContext(CartContext);
  const {counter, handleDecrement, handleIncrement} = useCount(item.quantity, 10);
  
  function onAdd() {
    if (counter > 0) {
      // alert(`Ha ingresado ${counter} items al carrito`);
      addItem(item, counter);
    }
  }

  function handleRemove() {
    removeItem(item.id);
  }

  return (
    <div className="card">
      <div className="card-body cart-item">

        <div className="cart-item-left">
          <img src={item.cover} alt={`${item.name} game image`} />
          <div>
            <h4 className="card-title">{item.name}</h4>
            <button type="button" className="btn btn-outline-secondary btn-sm cart-eliminar" onClick={handleRemove}>Eliminar Item</button>
          </div>
        </div>

        <div className="cart-item-right">
            <ItemQuantitySelector handleDecrement={handleDecrement} handleIncrement={handleIncrement} counter={counter} />
            <h4 className="card-text">{item.price.replace("USD", "")}</h4>
        </div>
      </div>
    </div>
  );
}

export default CartItem;