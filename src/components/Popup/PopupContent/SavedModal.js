import "./SavedModal.css";

function SavedModal(props) {
  return (
    <div className="saved-container-modal">
      <div className="modal-content">
          <h1>Success! </h1>
        <h2>
          You can view it at your <a href="https://open.spotify.com/">Spotify Playlist</a>
        </h2>
        <i
          className="cross-logo fa fa-solid fa-close"
          onClick={props.close}
        ></i>
      </div>
    </div>
  );
}

export default SavedModal;
