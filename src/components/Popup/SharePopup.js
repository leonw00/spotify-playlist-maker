import ModalBackdrop from "./PopupContent/ModalBackdrop";
import NameModal from "./PopupContent/NameModal";

function SharePopup(props) {
  return (
    <ModalBackdrop close={props.close}>
      <NameModal function={props.function} close={props.close} />
    </ModalBackdrop>
  );
}

export default SharePopup;
