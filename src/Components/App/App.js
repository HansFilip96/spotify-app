import { Button, Typography } from "@mui/material";
import "./App.css";
import SideNav from "../SideNav/SideNav";
import Playlist from "../Playlist/Playlist";
import { box } from "@mui/material";
import { border, Box } from "@mui/system";

const mockData = [
  { name: "Rock", playlistId: 123, image: "/Justin-Bieber.png" },
  { name: "Pop", playlistId: 646, image: "/Justin-Bieber.png" },
  { name: "Hip hop", playlistId: 834, image: "/Justin-Bieber.png" },
  { name: "X-mas", playlistId: 5503, image: "/Justin-Bieber.png" },
  { name: "Code life", playlistId: 4832, image: "/Justin-Bieber.png" },
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
          <Playlist />
        </Box>
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
      </Box>
    </Box>
  );
}

export default App;
