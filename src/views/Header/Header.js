import { useEffect, useState } from "react";
import { HeaderButton } from "../../components/Buttons/Button";
import { authenticate, logout, storeToken } from "../../logic/Auth";
import "./Header.css";

function Header() {
  const [auth, setAuth] = useState("");

  useEffect(() => {
    // check logged in
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = storeToken();
    }

    setAuth(token);
  }, []);

  return (
    <div className="header-block">
      <div className="header-logo">Spotifyed</div>

      <div className="header-list">
        <div className="header-list-content">Buy me a coffee</div>
        <div className="header-list-content">
          {auth ? (
            <HeaderButton
              name="Logout"
              onClick={() => {
                setAuth("");
                logout();
              }}
            />
          ) : (
            <HeaderButton name="Login to Spotify" onClick={authenticate} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
