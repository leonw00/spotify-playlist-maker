import "./TrackList.css";
import TrackNode from "./TrackNode";

function TrackList(props) {
  return (
    <div className="track-list-block">
      {props.tracks
        ? props.tracks.map((track) => (
            <TrackNode image={track.image} title={track.name} />
          ))
        : ""}
    </div>
  );
}

export default TrackList;
