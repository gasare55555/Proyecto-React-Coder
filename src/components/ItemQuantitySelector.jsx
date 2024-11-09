import "./ItemQuantitySelector.css";

function ItemQuantitySelector({handleDecrement, handleIncrement, counter}) {
  return (
    <div className="selector-container">
      <button type="button" className="btn btn-light counter-btn " onClick={handleDecrement}>-</button>
      <span className="counter fw-light">{counter}</span>
      <button type="button" className="btn btn-light counter-btn " onClick={handleIncrement}>+</button>
    </div> 
    
  );
}

export default ItemQuantitySelector;