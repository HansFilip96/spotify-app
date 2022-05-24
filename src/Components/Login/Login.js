import React from "react";
import { Box, Button } from "@mui/material";
import { accessUrl } from "../../config/config";

const Login = () => {
  return (
    <Box
      sx={{
        bgcolor: "Background.paper",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src="/image/spotify_logo.png"
        alt="spotify"
        style={{ marginBottom: 300, width: "70%", maxWidth: 500 }}
      />
      <Button href={accessUrl} color="primary" variant="contained" size="large">
        Login
      </Button>
    </Box>
  );
};

export default Login;
