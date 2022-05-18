import { useEffect, useState } from "react";
import { RunButton, TextAreaButton } from "../../components/Buttons/Button";
import TrackList from "../../components/TrackList/TrackList";
import { searchTrack } from "../../logic/Logic";
import { getRandomText } from "../../logic/Others";
import Header from "../Header/Header";
import "./MainPage.css";
import ArrowImage from "../../assets/right-arrow.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { authenticate, getToken, storeToken } from "../../logic/Auth";
import NameModal from "../../components/Popup/NameModal";

function MainPage() {
  const [target, setTarget] = useState("");
  const [tracks, setTracks] = useState([]);
  const [progress, setProgress] = useState(0);
  const [toggleProgress, setToggleProgress] = useState(false);
  const [finish, setFinish] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [auth, setAuth] = useState("");
  const [modal, setModal] = useState();

  useEffect(() => {
    // check logged in
    const hash = window.location.hash;
    let token = getToken();

    if (!token && hash) {
      token = storeToken();
    }

    setAuth(token);
  }, []);

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

  const generateTrackList = async (target) => {
    // parse the search key
    let wordList = target.split(/[ ,.]+/).filter((item) => item);

    let trackList = [];
    let progressPercentage = 0;

    // reset the tracklist
    setTracks([]);

    // reset the finist state
    setFinish(false);

    // show the progress bar
    setToggleProgress(true);

    // find the track and calculate the progress
    for (let i = 0; i < wordList.length; i++) {
      trackList.push(await searchTrack(wordList[i]));
      progressPercentage = Math.ceil(100 * (i / (wordList.length - 1)));
      setProgress(progressPercentage);
    }

    // hide the progress bar
    setToggleProgress(false);

    // reset the progress percentage to be zero
    setProgress(0);

    // set the finish state to be true
    setFinish(true);

    setTracks(trackList);
  };

  const resetTracklist = () => {
    // reset the tracklist
    setTracks([]);

    // reset the finist state
    setFinish(false);

    // reset the progress percentage to be zero
    setProgress(0);
  };

  const showModal = () => {
    if (modal == null) {
      setModal(<NameModal close={()=>{setModal();}}/>);
    }
    else{
      setModal();
    }
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
            <div className="word-count">{wordCount} / 250 Words</div>
            <RunButton
              name={auth ? "Generate Playlist" : "Login to Spotify"}
              onClick={auth ? () => generateTrackList(target) : authenticate}
            />
          </div>
        </div>

        <div className="image-area">
          <img className="arrow-image" src={ArrowImage} alt="arrow" />
        </div>

        <div className="display-block">
          <div className="display-playlist">
            <TrackList tracks={tracks} />
            {toggleProgress ? (
              <div className="circular-progress-block">
                <CircularProgressbar
                  value={progress}
                  maxValue={100}
                  text={`${progress}%`}
                  styles={buildStyles({
                    textColor: "grey",
                    pathColor: "orange",
                  })}
                />
              </div>
            ) : (
              ""
            )}
          </div>

          {finish ? (
            <div className="sidebar">
              <i class="fa fa-solid fa-share"></i>
              <i class="fa fa-solid fa-save" onClick={showModal}></i>
              <i class="fa fa-solid fa-trash" onClick={resetTracklist}></i>
            </div>
          ) : (
            <div className="sidebar"></div>
          )}
        </div>
      </div>
      {modal};
    </div>
  );
}

export default MainPage;
