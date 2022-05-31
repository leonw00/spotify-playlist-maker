import { useState } from "react";
import ModalBackdrop from "./PopupContent/ModalBackdrop";
import NameModal from "./PopupContent/NameModal";
import ShareModal from "./PopupContent/ShareModal";

function SharePopup(props) {
  const [success, setSuccess] = useState(false);
  let [playlistId, setPlaylistId] = useState("");
  console.log(props.playlistId);

  return (
    <ModalBackdrop close={props.close}>
      {!success ? (
        <NameModal
          function={async (param) => {
            playlistId = await props.function(param);
            setPlaylistId(playlistId);
            setSuccess(true);
          }}
          close={props.close}
        />
      ) : (
        <ShareModal
          close={props.close}
          playlistId={playlistId}
        />
      )}
    </ModalBackdrop>
  );
}

export default SharePopup;
