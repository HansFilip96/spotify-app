import React from "react";
import { Box, Divider } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NavItem from "../NavItem/NavItem";
import NavPlaylist from "../NavPlaylist/NavPlaylist";
import { connect } from "react-redux";

const SideNav = ({ playlists, loading }) => {
  const renderPlaylists = () => {
    if (loading)
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
        <NavPlaylist loading={loading} key={e} />
      ));
    return playlists.map((playlist, i) => (
      <NavPlaylist id={playlist.id} name={playlist.name} key={i} />
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

const mapStateToProps = (state) => {
  return {
    playlists: state.playlist.items,
    loading: state.playlist.loading,
  };
};

export default connect(mapStateToProps)(SideNav);
