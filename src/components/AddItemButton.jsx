import "./AddItemButton.css"

function AddItemButton({action, content}) {
  return (
    <button type="button" className="btn btn-primary add-btn" onClick={action}>{content}</button>
  );
}

export default AddItemButton;