import React from "react";
import PlaylistItem from "../playlistItem/PlaylistItem";
import { Box, List, Typography } from "@mui/material";

const Library = ({ playlists, loading }) => {
  const renderPlaylistItem = () => {
    if (loading)
      return [1, 2, 3, 4, 5, 6, 7].map((playlist, i) => (
        <PlaylistItem key={i} loading={loading} />
      ));
    return playlists.map((playlist, i) => (
      <PlaylistItem key={i} {...playlist} loading={loading} />
    ));
  };

  return (
    <Box
      id="Library"
      px={3}
      sx={{
        display: { xs: "flex", md: "none" },
        bgcolor: "Background.default",
        flex: 1,
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Typography
        py={3}
        variant="h2"
        fontWeight="Bold"
        sx={{ color: "text.primary", fontSize: 30 }}
      >
        Ditt Bibliotek
      </Typography>
      <List>{renderPlaylistItem()}</List>
    </Box>
  );
};

export default Library;
