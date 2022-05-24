export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "ca04cee3e771432e97806ba503a7b086";
export const liveURL = "...";
export const devURL = "http://localhost:3000/";
export const redirectURL = devURL;
export const scopes = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
