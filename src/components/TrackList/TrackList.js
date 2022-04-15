import "./TrackList.css";
import { TrackNode } from "./TrackNode";

function TrackList(props) {
  return (
    <div className="track-list-block">
      {props.tracks.length > 0 ? (
        props.tracks.map((track) => {
          let artists = track.artists.reduce((prev, curr, index, arr) => {
            return `${prev}${curr}${index !== arr.length - 1 ? ", " : ""}`;
          }, "");
          return (
            <TrackNode
              image={track.image}
              title={track.title}
              artist={artists}
            />
          );
        })
      ) : ""}
    </div>
  );
}

export default TrackList;
