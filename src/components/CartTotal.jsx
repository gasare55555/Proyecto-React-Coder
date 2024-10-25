import "./CartTotal.css"
import AddItemButton from "./AddItemButton";

function CartTotal({totalPrice, setFormDisplay}) {
  function showForm() {
    setFormDisplay(true);
  }

  console.log("CartTotal re-render");

  return (
    <div className="card cart-total-container-inside">
      <div className="card-body cart-total">
        <div className="cart-total-price">
          <h4 className="card-title">Estimated total</h4>
          <h4 className="card-text">${totalPrice}</h4>
        </div>
        <p className="card-text mb-4">Sales tax will be calculated during checkout where applicable</p>
        <AddItemButton action={showForm} content="Go to Payment" type="button" />
      </div>

    </div>
  );
}

export default CartTotal;