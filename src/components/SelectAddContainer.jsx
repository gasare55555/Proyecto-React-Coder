import "./SelectAddContainer.css"
import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import { useCount } from "../hooks/useCount";
import ItemQuantitySelector from "./ItemQuantitySelector";
import AddItemButton from "./AddItemButton";

function SelectAddContainer({item}) {
  const {addItem} = useContext(CartContext);
  const {counter, setCounter, handleDecrement, handleIncrement} = useCount(0, 10);

  function onAdd() {
    if (counter > 0) {
      // alert(`Ha ingresado ${counter} items al carrito`);
      addItem(item, counter);
      setCounter(0);
    }
  }

  return (
    <div className='select-add-container'>
      <ItemQuantitySelector handleDecrement={handleDecrement} handleIncrement={handleIncrement} counter={counter} />
      <AddItemButton action={onAdd} content="Agregar al carrito" />
    </div>
  );
}

export default SelectAddContainer;