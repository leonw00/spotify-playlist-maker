import "./ModalBackdrop.css";

function ModalBackdrop(props) {
  return (
    <div className="modal-board">
      <div className="backdrop" onClick={props.close} />
      {props.children}
    </div>
  );
}

export default ModalBackdrop;
