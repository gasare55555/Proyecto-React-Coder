import "./CartTotal.css"
import CustomButton from "./CustomButton";

function CartTotal({totalPrice, setFormDisplay}) {
  function showForm() {
    setFormDisplay(true);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 500);
  }

  console.log("CartTotal re-render");

  return (
    <div className="card cart-total-container-inside">
      <div className="card-body cart-total">
        <div className="cart-total-price">
          <h4 className="card-title fs-5">Estimated total</h4>
          <h5 className="card-text fs-5">${totalPrice}</h5>
        </div>
        <p className="card-text mb-4">Sales tax will be calculated during checkout where applicable</p>
        <CustomButton action={showForm} content="Go to Payment" type="button" />
      </div>

    </div>
  );
}

export default CartTotal;