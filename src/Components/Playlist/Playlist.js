import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { height } from "@mui/system";

const Playlist = () => {
  return (
    <Box sx={{ bgcolor: "Background.paper", flex: 1, overflowY: "auto" }}>
      <Box
        p={{ xs: 3, md: 4 }}
        sx={{
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(17,38,25,1) 0%, rgba(24,115,38,1) 100%);",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: { xs: "flex-start", md: "flex-end", xl: "center" },
          gap: 3,
          boxSizing: "border-box",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Avatar
          src="/Justin-Bieber.png"
          variant="square"
          alt="HansFilip96"
          sx={{
            boxShadow: 15,
            width: { sx: "100%", md: 235 },
            height: { sx: "100%", md: 235 },
          }}
        />
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: "bold" }}>
            Playlist
          </Typography>
          <Typography sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: "bold" }}>
            Cold Life
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Playlist;
