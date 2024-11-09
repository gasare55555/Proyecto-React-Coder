import "./CartItem.css";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { useEffect } from "react";
import { useCount } from "../hooks/useCount";

function CartItem({item, addItem2, removeItem}) {
  const {counter, handleDecrement, handleIncrement} = useCount(item.quantity, 10);
  
  useEffect(() => {
      console.log(`counter ${counter}`);
      addItem2(item, counter);
  }, [counter]);

  function handleDecrementLimited() {
    if (counter > 1) {
      handleDecrement();
    }
  }

  function handleRemove() {
    removeItem(item.id);
  }

  console.log("CartItem re-render");

  return (
    <div className="card cart-item-container">
      <div className="card-body cart-item">

        <div className="cart-item-left">
          <img src={item.cover} alt={`${item.name} game image`} />
          <div>
            <h4 className="card-title fs-5">{item.name}</h4>
            <button type="button" className="btn btn-outline-secondary btn-sm cart-eliminar" onClick={handleRemove}>Delete Item</button>
          </div>
        </div>

        <div className="cart-item-right">
            <ItemQuantitySelector handleDecrement={handleDecrementLimited} handleIncrement={handleIncrement} counter={counter} />
            <h5 className="card-text fs-5">${item.price.toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
}

export default CartItem;