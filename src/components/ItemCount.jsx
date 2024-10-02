import { useState, useRef } from 'react';
import "./ItemCount.css";

function ItemCount() {
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
      alert(`Ha ingresado ${counter} items al carrito`);
    }
  }

  return (
    <div className='counter-container'>
      <div>
        <button type="button" className="btn btn-light counter-btn " onClick={handleDecrement}>-</button>
        <span className="counter">{counter}</span>
        <button type="button" className="btn btn-light counter-btn " onClick={handleIncrement}>+</button>
      </div>
      <button type="button" className="btn btn-primary add-btn" onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;