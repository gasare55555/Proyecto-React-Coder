import "./CartForm.css"
import { useEffect, useRef } from "react";
import { sendDocument } from "../firebase/firebase";
import AddItemButton from "./AddItemButton";
import Swal from "sweetalert2";

function CartForm({totalPrice, getOrders}) {
  const formRef = useRef();

  useEffect(() => {

    function submitForm(e) {
      e.preventDefault();
      const form = new FormData(formRef.current);
      if (form.get("email") == form.get("email-confirm")) {
        async function sendOrder() {
          const order = {
            buyer: {
              name: `${form.get("name")} ${form.get("last-name")}`,
              phone: form.get("telephone"),
              email: form.get("email")
            },
            items: getOrders(),
            date: new Date(),
            total: totalPrice
          };
          const orderRef = await sendDocument(order, "orders");
          orderRef ? 
            Swal.fire({
              icon: "success",
              title: "Order submitted succesfully!",
              text: `With Id: ${orderRef.id}`
            }) :
            Swal.fire({
              icon: "error",
              title: "Order couldn't be submitted!",
            });
        }
        sendOrder();
      } else {
        Swal.fire({
          icon: "error",
          title: "Email addresses don't match!",
        });
      }
    }

    document.addEventListener("submit", submitForm);

    return () => {
      document.removeEventListener("submit", submitForm);
    }
  }, []);

  console.log("CartForm re-render");

  return (
    <div className="card cart-form-container-inside">
      <form ref={formRef} className="card-body cart-form">
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