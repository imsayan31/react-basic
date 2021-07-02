function Modal(props) {
  function onCancelHandler() {
    props.onCancel();
  }

  function onConfirmHandler() {
    console.log("Confirm clicked");
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={onCancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={onConfirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
