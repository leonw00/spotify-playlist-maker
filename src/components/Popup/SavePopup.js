import ModalBackdrop from "./PopupContent/ModalBackdrop";
import NameModal from "./PopupContent/NameModal";

function SavePopup(props) {
  return (
    <ModalBackdrop close = {props.close}>
      <NameModal funciton = {props.function}/>
    </ModalBackdrop>
  );
}

export default SavePopup;
