import { useState } from "react";
import ModalBackdrop from "./PopupContent/ModalBackdrop";
import NameModal from "./PopupContent/NameModal";
import SavedModal from "./PopupContent/SavedModal";

function SavePopup(props) {
  const [success, setSuccess] = useState(false);

  return (
    <ModalBackdrop close={props.close}>
      {!success ? (
        <NameModal
          function={async (param) => {
            await props.function(param);
            setSuccess(true);
          }}
          close={props.close}
        />
      ) : (
        <SavedModal close={props.close} />
      )}
    </ModalBackdrop>
  );
}

export default SavePopup;
