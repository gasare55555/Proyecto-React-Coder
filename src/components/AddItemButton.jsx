function AddItemButton({onAdd}) {
  return (
    <button type="button" className="btn btn-primary add-btn" onClick={onAdd}>Agregar al carrito</button>
  );
}

export default AddItemButton;