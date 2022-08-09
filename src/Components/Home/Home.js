import React from "react";
import { Box, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <img
        src="/image/Spotify_Logo.png"
        alt="Filip"
        style={{ maxHeight: "50%", maxWidth: "50%" }}
      />
      <Button
        size="large"
        variant="contained"
        onClick={() => {
          window.location.href = "https://my-portfolio-nu-wine.vercel.app/";
        }}
      >
        Kontakta Mig
      </Button>
    </Box>
  );
};

export default Home;
