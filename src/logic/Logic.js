import axios from "axios";

async function searchTrack(e) {
  let arr = [];
  var iteration = 0;
  var limit = 50;

  while (arr.length === 0) {
    // find tracks with "target"
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
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

  let localTrack = arr[Math.floor(Math.random() * arr.length)];

  return {"image": localTrack.album.images[0].url, "name": localTrack.name};
}

export async function generateTrackList(target) {
  // parse the search key
  let wordList = target.split(/[ ,.]+/).filter((item) => item);

  let trackList = [];

  for (let i = 0; i < wordList.length; i++) {
    trackList.push(await searchTrack(wordList[i]));
  }

  return trackList;
}
