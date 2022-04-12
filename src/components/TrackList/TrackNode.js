import "./TrackNode.css";

function TrackNode(props) {
  return (
    <div className="track-node-block">
      <div className="node-image-block">
          {props.image ? <img src={props.image} alt="/" /> : <div className="blackbox"/>}
      </div>
      <div className="node-text-block">
        <div className="node-title">{props.title}</div>
        <div className="node-desc">{props.artist}</div>
      </div>
    </div>
  );
}

export default TrackNode;
