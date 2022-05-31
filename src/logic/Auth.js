const CLIENT_ID = process.env.REACT_APP_CLIEND_ID;
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export function authenticate(e) {
  e.preventDefault();
  window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
  storeToken();
}

export function storeToken(e){
  const hash = window.location.hash;
  let token = hash.substring(1).split("&").find((elem) => elem.startsWith("access_token")).split("=")[1];
  window.location.hash = "";
  window.localStorage.setItem("token", token);
  return token;
}

export function getToken(e){
  let token = window.localStorage.getItem("token");
  return token;
}

export function logout() {
  window.location.hash = "";
  window.localStorage.removeItem("token");
  window.location.reload();
}
