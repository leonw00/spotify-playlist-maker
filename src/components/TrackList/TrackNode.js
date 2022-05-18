import "./TrackNode.css";

export function TrackNode(props) {
  return (
    <div className="track-node-block" key={props.id}>
      <div className="node-image-block">
          {props.image ? <img src={props.image} alt="/" /> : <div className="image-placeholder"/>}
      </div>
      <div className="node-text-block">
        <div className="node-title">{props.title}</div>
        <div className="node-desc">{props.artist}</div>
      </div>
    </div>
  );
}

export function PlaceholderNode(){
  return (
    <div className="track-node-block">
      <div className="node-image-block">
          <div className="image-placeholder shine"/>
      </div>
      <div className="node-text-block">
        <div className="node-title title-placeholder shine"/>
        <div className="node-desc desc-placeholder shine"/>
      </div>
    </div>
  );
}
