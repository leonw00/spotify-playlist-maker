import "./TrackList.css";
import TrackNode from "./TrackNode";

function TrackList(props) {
  return (
    <div className="track-list-block">
      {props.tracks}
      {/* {props.tracks ? props.tracks.map((track) => <TrackNode />) : ""} */}
    </div>
  );
}

export default TrackList;
