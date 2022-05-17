import React from "react";
import { Box, Divider } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NavItem from "../NavItem/NavItem";
import NavPlaylist from "../NavPlaylist/NavPlaylist";

const SideNav = ({ playlists }) => {
  const renderPlaylists = (second) => {
    return playlists.map((playlist, i) => (
      <NavPlaylist {...playlist} key={i} />
    ));
  };
  return (
    <Box
      sx={{
        bgcolor: "Background.default",
        width: 230,
        height: "100%",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
      }}
    >
      <Box p={3}>
        <img src="/image/Spotify_Logo.png" width={"75%"} alt="Spotify" />
      </Box>
      <NavItem name="Home" Icon={HomeRoundedIcon} target="/" active />
      <NavItem name="search" Icon={SearchRoundedIcon} target="/search" />
      <Box px={3} py={1}>
        <Divider sx={{ bgcolor: "#ffffff40" }} />
      </Box>
      <Box sx={{ overflowY: "auto", flex: 1 }}>{renderPlaylists()}</Box>
    </Box>
  );
};

export default SideNav;
