import { Button, Typography } from "@mui/material";
import "./App.css";
import SideNav from "../SideNav/SideNav";
import Playlist from "../Playlist/Playlist";
import { box } from "@mui/material";
import { border, Box } from "@mui/system";
import MobileNav from "../MobileNav/MobileNav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Player from "../Player/Player";
import Home from "../Home/Home";
import Library from "../Library/Library";
import Login from "../Login/Login";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchUser, fetchPlaylist, addDevice } from "../../store/actions/index";
import Search from "../Search/Search";

function App({ token, fetchUser, fetchPlaylist, spotifyApi, addDevice }) {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const getData = async () => {
      fetchUser(spotifyApi);
      fetchPlaylist(spotifyApi);
    };

    if (token) {
      window.onSpotifyWebPlaybackSDKReady = () => {
        setupSpotifyConnect(token, addDevice);
      };
      getData();
    }
  }, [token, fetchUser]);

  const setupSpotifyConnect = (token, addDevice) => {
    const player = new window.Spotify.Player({
      name: "Filip's Spotify",
      getOAuthToken: (cb) => cb(token),
      volume: 0.5,
    });

    //  ***************
    player.addListener("ready", ({ device_id }) => {
      addDevice(device_id);
      setIsPlayerReady(true);
    });

    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });

    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });

    player.addListener("account_error", ({ message }) => {
      console.error(message);
    });
    //  ***************

    player.connect();
  };

  return (
    <Box className="App">
      {token ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: 1, overflowY: "auto", display: "flex" }}>
            <SideNav />

            <Routes>
              <Route
                path="/playlist/:id"
                element={<Playlist spotifyApi={spotifyApi} />}
              />
              <Route
                path="/search"
                element={<Search spotifyApi={spotifyApi} />}
              />
              <Route path="/library" element={<Library />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
          {isPlayerReady && <Player spotifyApi={spotifyApi} />}
          <MobileNav />
          <Banner />
        </Box>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </Box>
  );
}

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 25,
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        fontSize: 14,
        boxSizing: "border-box",
        paddingRight: 10,
      }}
    >
      Made with ♡ by Filip Samuelsson
    </Box>
  );
};

const mapStateToProps = (state) => {
  return { token: state.auth.token };
};

const mapDispatch = (dispatch) => {
  return {
    fetchUser: (api) => dispatch(fetchUser(api)),
    fetchPlaylist: (api) => dispatch(fetchPlaylist(api)),
    addDevice: (id) => dispatch(addDevice(id)),
  };
};

export default connect(mapStateToProps, mapDispatch)(App);
