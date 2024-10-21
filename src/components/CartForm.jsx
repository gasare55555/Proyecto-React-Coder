import AddItemButton from "./AddItemButton";
import "./CartForm.css"

function CartForm() {
  return (
    <div className="card cart-form-container-inside">
      <form className="card-body cart-form">
        <div>
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-control" required />
        </div>
        <div>
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input type="text" id="last-name" name="last-name" className="form-control" required />
        </div>
        <div>
            <label htmlFor="telephone" className="form-label">Telephone Number</label>
            <input type="tel" id="telephone" name="telephone" className="form-control" required />
        </div>
        <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-control" required />
        </div>
        <div className="mb-4">
            <label htmlFor="email-confirm" className="form-label">Confirm Email</label>
            <input type="email" id="email-confirm" name="email-confirm" className="form-control" required />
        </div>
        <AddItemButton content="Submit Order" type="submit" />
      </form>
    </div>
  );
}

export default CartForm;