import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const CLIENT_ID = "7225c228ebc34a3ca1b369ee71a06a0e";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    // when logging in
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const runProgram = async (e) => {
    e.preventDefault();

    // parse the search key
    let wordList = searchKey.split(/[ ,.]+/).filter((item) => item);

    let trackList = [];

    for (let i = 0; i < wordList.length; i++) {
      trackList.push(await searchTrack(wordList[i]));
    }

    setTracks(trackList);

    // createPlaylist(trackList);
  };

  const searchTrack = async (e) => {
    let arr = [];
    var iteration = 0;
    var limit = 50;

    while (arr.length === 0) {
      // find tracks with "target"
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: e,
          type: "track",
          limit: limit,
          offset: iteration * limit,
        },
      });

      iteration++;

      // go through all the items and find exact names
      arr = data.tracks.items.filter(
        (item) => item.name.toLowerCase() === e.toLowerCase()
      );
    }

    return arr[Math.floor(Math.random() * arr.length)];
  };

  const createPlaylist = async (tracks) => {
    let userId = "";

    // get the user to get the id
    const user = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    userId = user.data.id;

    // request data object
    const content = {
      name: "playlist",
    };

    // set the headers
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    // create the playlist
    const { data } = await axios.post(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      JSON.stringify(content),
      config
    );

    console.log(data);
  };

  const renderTracks = () => {
    return tracks.map((track) => (
      <div key={track.id}>
        {track.album.images.length ? (
          <img
            width={"250px"}
            height={"300px"}
            src={track.album.images[0].url}
            alt="/"
          />
        ) : (
          <div>no image</div>
        )}
        {track.name}
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>

        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <button onClick={logout}>logout</button>
        )}

        {token ? (
          <form onSubmit={runProgram}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}

        {renderTracks()}
      </header>
    </div>
  );
}

export default App;
