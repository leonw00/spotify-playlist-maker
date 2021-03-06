import "./Button.css";

export function RunButton(props) {
  return (
    <button className="run-button" onClick={props.onClick}>
      {props.name}
    </button>
  );
}

export function HeaderButton(props){
    return (
      <button className="header-button" onClick={props.onClick}>
        {props.name}
      </button>
    );
}

export function TextAreaButton(props){
  return (
    <button className="textarea-button" onClick={props.onClick}>
      <i>{props.name}</i>
    </button>
  );
}


export function ModalButton(props){
  return (
    <button className="modal-button" onClick={props.onClick}>
      <i>{props.name}</i>
    </button>
  );
}