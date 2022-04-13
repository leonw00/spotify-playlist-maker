import { useState } from "react";
import { RunButton, TextAreaButton } from "../../components/Buttons/Button";
import TrackList from "../../components/TrackList/TrackList";
import { generateTrackList } from "../../logic/Logic";
import { getRandomText } from "../../logic/Others";
import Header from "../Header/Header";
import "./MainPage.css";

function MainPage() {
  const [target, setTarget] = useState("");
  const [tracks, setTracks] = useState([]);

  const generateRandomText = () =>{
    let randomText = getRandomText();
    setTarget(randomText);
  }

  const showTextButtons = () =>{
    return(
      <div className="text-area-button-block">
        <TextAreaButton onClick={generateRandomText} name="Sample Text" />
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
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="text-area"
            placeholder="Anything you type will be converted into a spotify playlist."
          ></textarea>
          <div className="button-block">
            <RunButton
              name="Generate Playlist"
              onClick={async () => {
                var trackList = await generateTrackList(target);
                
                setTracks(trackList);
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
