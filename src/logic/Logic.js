import axios from "axios";

export async function searchTrack(e) {
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

  // set the artists as there may be more than 1
  let artists = localTrack.artists.map((artist) => artist.name);

  return {
    image: localTrack.album.images[0].url,
    title: localTrack.name,
    artists: artists,
  };
}

// export async function createEmtpyPlaylist(userId, name) {
//   // request data object
//   const content = {
//     name: name,
//   };

//   // set the headers
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   // create the playlist
//   const { data } = await axios.post(
//     `https://api.spotify.com/v1/users/${userId}/playlists`,
//     JSON.stringify(content),
//     config
//   );
// }
