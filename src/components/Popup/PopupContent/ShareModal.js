import { useState } from "react";
import "./ShareModal.css";

function ShareModal(props) {
  let [successText, setSuccessText] = useState("");
  let text = "https://open.spotify.com/playlist/" + props.playlistId;

  const copyClipboard = () =>{
    navigator.clipboard.writeText(text);
    setSuccessText("Copied to Clipboard!");
  }

  return (
    <div className="share-container-modal">
      <div className="modal-content">
        <h3>Share the Link!</h3>
        <div className="share-link-container">
          <div className="link-area">{text}</div>
          <div className="copy-button" onClick={copyClipboard}>
            <i class="fa fa-solid fa-clipboard"></i>
          </div>
        </div>
        <i
          className="cross-logo fa fa-solid fa-close"
          onClick={props.close}
        ></i>
        <div className = "copy-success-text">
          {successText}
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
