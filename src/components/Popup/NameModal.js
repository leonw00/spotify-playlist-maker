import { ModalButton } from "../Buttons/Button";
import "./NameModal.css";

function NameModal(props) {
  return (
    <div className="name-container-modal">
      <h1>What is the playlist name?</h1>
      <input type="text" />
      <ModalButton onClick={props.function} name="Continue"/>
    </div>
  );
}

export default NameModal;
