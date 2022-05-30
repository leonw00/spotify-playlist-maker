import ModalBackdrop from "./PopupContent/ModalBackdrop";
import NameModal from "./PopupContent/NameModal";
import ShareModal from "./PopupContent/ShareModal";

function SharePopup(props) {
  return (
    <ModalBackdrop close={props.close}>
      {/* <NameModal function={props.function} close={props.close} /> */}
      <ShareModal close={props.close} />
    </ModalBackdrop>
  );
}

export default SharePopup;
