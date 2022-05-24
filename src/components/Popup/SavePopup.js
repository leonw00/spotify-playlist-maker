import ModalBackdrop from "./PopupContent/ModalBackdrop";
import NameModal from "./PopupContent/NameModal";
import SavedModal from "./PopupContent/SavedModal";

function SavePopup(props) {
  return (
    <ModalBackdrop close={props.close}>
      {/* <NameModal function={props.function} close={props.close} /> */}
      <SavedModal close={props.close}/>
    </ModalBackdrop>
  );
}

export default SavePopup;
