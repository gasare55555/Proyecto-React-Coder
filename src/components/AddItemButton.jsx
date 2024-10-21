import "./AddItemButton.css"

function AddItemButton({action, content, type}) {
  return (
    <button type={type} className="btn btn-primary add-btn" onClick={action}>{content}</button>
  );
}

export default AddItemButton;