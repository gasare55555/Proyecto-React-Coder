import "./CartItem.css";
import { useContext, useState, useRef } from "react";
import { CartContext } from "../context/CartContext";
import ItemQuantitySelector from "./ItemQuantitySelector";

function CartItem({item, removeItem}) {
  const {addItem} = useContext(CartContext);
  const [counter, setCounter] = useState(0);
  const initialStock = useRef(10);
  const stock = useRef(initialStock.current);

  function handleDecrement() {
    if (counter > 0) {
      setCounter(counter - 1);
      stock.current++;
      console.log(stock.current);
    }
  }

  function handleIncrement() {
    if (counter < initialStock.current) {
      setCounter(counter + 1);
      stock.current--;
      console.log(stock.current);
    }
  }
  
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
          <div>
            <ItemQuantitySelector handleDecrement={handleDecrement} handleIncrement={handleIncrement} counter={counter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;