import "./CustomButton.css"

function CustomButton({action, content, type}) {
  return (
    <button type={type} className="btn btn-primary custom-btn" onClick={action}>{content}</button>
  );
}

export default CustomButton;