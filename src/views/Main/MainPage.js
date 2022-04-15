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
  const [wordCount, setWordCount] = useState(0);

  const generateRandomText = () => {
    let randomText = getRandomText();
    let wordList = randomText.split(/[ ,.]+/).filter((item) => item);
    setTarget(randomText);
    setWordCount(wordList.length);
  };

  const showTextButtons = () => {
    return (
      <div className="text-area-button-block">
        <TextAreaButton onClick={generateRandomText} name="Sample Text" />
      </div>
    );
  };

  const setFormattedContent = (value) => {
    setTarget(value);
    let wordList = value.split(/[ ,.]+/).filter((item) => item);
    setWordCount(wordList.length);
  };

  return (
    <div className="main-page">
      <Header />

      <div className="main-body">
        <div className="input-block">
          {!target ? showTextButtons() : ""}

          <textarea
            value={target}
            onChange={(e) => setFormattedContent(e.target.value)}
            className="text-area"
            placeholder="Anything you type will be converted into a spotify playlist."
          ></textarea>
          <div className="button-block">
            <div className="word-count">{wordCount} / 250</div>
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
