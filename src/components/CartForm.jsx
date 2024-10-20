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
        
      </form>
    </div>
  );
}

export default CartForm;