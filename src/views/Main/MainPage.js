import { useEffect, useState } from "react";
import { RunButton, TextAreaButton } from "../../components/Buttons/Button";
import TrackList from "../../components/TrackList/TrackList";
import { generateTrackList } from "../../logic/Logic";
import Header from "../Header/Header";
import "./MainPage.css";

function MainPage() {
  const [target, setTarget] = useState("");
  const [tracks, setTracks] = useState([]);

  const showTextButtons = () =>{
    return(
      <div className="text-area-button-block">
        <TextAreaButton onClick={"#"} name="Sample Text" />
      </div>
    );
  }

  return (
    <div className="main-page">
      <Header />

      <div className="main-body">
        <div className="input-block">

          {!target ? showTextButtons() : ''}

          <textarea
            onChange={(e) => setTarget(e.target.value)}
            className="text-area"
            placeholder="Anything you type will be converted into a spotify playlist."
          ></textarea>
          <div className="button-block">
            <RunButton
              name="Generate Playlist"
              onClick={async () => {
                let trackList = await generateTrackList(target);
                console.log([...trackList]);
                setTracks([trackList[0]]);
                // trackList.map((newTrack) => {
                //   console.log(newTrack);
                //   setTracks([...tracks, newTrack.name]);
                // });
              }}
            />
          </div>
        </div>

        <div className="display-block">
          <TrackList tracks={tracks} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
