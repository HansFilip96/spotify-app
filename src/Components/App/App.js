import { Button, Typography } from "@mui/material";
import "./App.css";
import SideNav from "../SideNav/SideNav";
import Playlist from "../Playlist/Playlist";
import { box } from "@mui/material";
import { border, Box } from "@mui/system";
import MobileNav from "../MobileNav/MobileNav";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Player from "../Player/Player";

const mockData = [
  { name: "Rock", playlistId: 123, image: "/Justin-Bieber.png" },
  { name: "Pop", playlistId: 646, image: "/Justin-Bieber.png" },
  { name: "Hip hop", playlistId: 834, image: "/Justin-Bieber.png" },
  { name: "X-mas", playlistId: 5503, image: "/Justin-Bieber.png" },
  { name: "Code life", playlistId: 4832, image: "/Justin-Bieber.png" },
];

const songs = [
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
  {
    image: "/Justin-Bieber.png",
    title: "Holy",
    artist: "Justin Bieber",
    album: "No clue",
    duration: 180,
  },
];

function App() {
  return (
    <Box className="App">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flex: 1, overflowY: "auto", display: "flex" }}>
          <SideNav playlists={mockData} />

          <Routes>
            <Route path="/playlist/:id" element={<Playlist songs={songs} />} />
            <Route
              path="/search"
              element={<h1 style={{ color: "white" }}>Search</h1>}
            />
            <Route
              path="/library"
              element={<h1 style={{ color: "white" }}>library</h1>}
            />
            <Route
              path="/"
              element={<h1 style={{ color: "white" }}>Home</h1>}
            />
          </Routes>
        </Box>
        <Player />
        <MobileNav />
        <Banner />
      </Box>
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

export default App;
