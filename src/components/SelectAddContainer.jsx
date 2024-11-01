import "./SelectAddContainer.css"
import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import { useCount } from "../hooks/useCount";
import { useNavigate } from "react-router-dom";
import ItemQuantitySelector from "./ItemQuantitySelector";
import Swal from "sweetalert2";
import CustomButton from "./CustomButton";

function SelectAddContainer({item}) {
  const {addItem} = useContext(CartContext);
  const {counter, setCounter, handleDecrement, handleIncrement} = useCount(0, 10);
  const navigate = useNavigate();
  
  function onAdd() {
    if (counter > 0) {
      addItem(item, counter);
      setCounter(0);
      Swal.fire({
        title: "Item added to your cart!",
        icon: "success",
        confirmButtonColor: "#E77917",
        confirmButtonText: "Go to Cart",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cart");
        }
      });
    }
  }

  return (
    <div className='select-add-container'>
      <ItemQuantitySelector handleDecrement={handleDecrement} handleIncrement={handleIncrement} counter={counter} />
      <CustomButton action={onAdd} content="Add to cart" type="button" />
    </div>
  );
}

export default SelectAddContainer;