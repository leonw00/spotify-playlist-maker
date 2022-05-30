import "./ShareModal.css";

function ShareModal(props) {
  return (
    <div className="share-container-modal">
      <div className="modal-content">
        <h3>Share the Link!</h3>
        <div className="share-link-container">
          <div className="link-area">{props.link}</div>
          <div className="copy-button">
            <i class="fa fa-solid fa-clipboard"></i>
          </div>
        </div>
        <i
          className="cross-logo fa fa-solid fa-close"
          onClick={props.close}
        ></i>
      </div>
    </div>
  );
}

export default ShareModal;
