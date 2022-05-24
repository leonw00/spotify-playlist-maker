import { useState } from "react";
import "./NameModal.css";
import { ModalButton } from "../../Buttons/Button";

function NameModal(props) {
  const [content, setContent] = useState("");

  return (
    <div className="name-container-modal">
      <div className="modal-content">
        <h1>What is the playlist name?</h1>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ModalButton onClick={() => props.function(content)} name="Continue" />
        <i
          className="cross-logo fa fa-solid fa-close"
          onClick={props.close}
        ></i>
      </div>
    </div>
  );
}

export default NameModal;
