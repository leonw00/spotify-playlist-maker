import { ModalButton } from "../Buttons/Button";
import "./NameModal.css";

function NameModal(props) {
  return (
    <div className="name-container-modal">
      <div className="modal-content">
        <h1>What is the playlist name?</h1>
        <input type="text" />
        <ModalButton onClick={props.function} name="Continue" />
        <i class="cross-logo fa fa-solid fa-close" onClick={props.close}></i>
      </div>
    </div>
  );
}

export default NameModal;
