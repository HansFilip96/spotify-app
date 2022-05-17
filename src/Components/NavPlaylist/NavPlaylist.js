import React from "react";
import { Box } from "@mui/material";

const NavPlaylist = ({ name, playlistId }) => {
  return (
    <Box
      p={3}
      py={1}
      sx={{
        color: "text.secondary",
        cursor: "pointer",
        fontSize: 14,
        "&:hover": { color: "text.primary" },
      }}
    >
      {name}
    </Box>
  );
};

export default NavPlaylist;
