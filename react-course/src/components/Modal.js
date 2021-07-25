function Modal(props) {
  console.log(props)
  function finalizeDelete() {
    props.onClick();
    props.removeTodo(props.props.text);
  }
  function doNotDelete() {
    props.onClick();
  }
  return (
    <div className="modal">
      <p>Really want to delete?</p>
      <button className="btn" onClick={finalizeDelete}>
        Yes
      </button>
      <button className="btn btn--alt" onClick={doNotDelete}>
        No
      </button>
    </div>
  );
}

export default Modal;
