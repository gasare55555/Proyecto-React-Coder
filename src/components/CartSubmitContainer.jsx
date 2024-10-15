import { useContext, useState, useRef } from 'react';
import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from "./ItemQuantitySelector";
import AddItemButton from "./AddItemButton";

function CartSubmitContainer({item}) {
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

  return (
    <div className='cart-submit-container'>
      <ItemQuantitySelector handleDecrement={handleDecrement} handleIncrement={handleIncrement} counter={counter} />
      <AddItemButton onAdd={onAdd}/>
    </div>
  );
}

export default CartSubmitContainer;