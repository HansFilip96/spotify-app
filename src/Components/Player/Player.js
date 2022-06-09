import React, { useEffect } from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import PlayerControlls from "../PlayerControlls/PlayerControlls";
import VolumeControlls from "../VolumeControlls/VolumeControlls";
import { connect } from "react-redux";
import { updateSongInfoStart } from "../../store/actions";
import PlayerOverlay from "../PlayerOverlay/PlayerOverlay";
import { openOverlay } from "../../store/actions/index";

const Player = ({
  openOverlay,
  spotifyApi,
  updateSongInfoStart,
  title,
  artist,
  image,
  PlayerOverlayOpen,
}) => {
  const sliderStyle = {
    color: "#fff",
    height: 4,
    padding: 0,
    width: "100%",
    "& .Mui-focusVisible": {
      boxShadow: "none",
    },
    "& .MuiSlider-thumb": {
      width: 0,
      height: 0,
      "&:hover": {
        boxShadow: "none",
      },
      "&:focus": {
        boxShadow: "none",
      },
    },
    "&:hover": {
      "& .MuiSlider-track": {
        backgroundColor: "primary.main",
      },
      "& .MuiSlider-thumb": {
        width: 12,
        height: 12,
      },
    },
    "& .MuiSlider-track": {
      border: "none",
    },
  };

  useEffect(() => {
    updateSongInfoStart(spotifyApi);
  }, []);

  const handleOpenOverlay = () => {
    if (!PlayerOverlayOpen) {
      openOverlay();
    }
  };

  return (
    <Box onClick={handleOpenOverlay}>
      <Grid
        container
        px={3}
        sx={{
          bgcolor: "Background.paper",
          height: 100,
          width: "100%",
          borderTop: "1px solid #292929",
        }}
      >
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            src={image?.url}
            alt={title}
            variant="square"
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary", fontSize: 14 }}>
              {title}
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
              {artist}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            justifyContent: { xs: "flex-end", md: "center" },
            alignItems: "center",
          }}
        >
          <PlayerControlls sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
        </Grid>
        <VolumeControlls sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
      </Grid>
      <PlayerOverlay sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
    </Box>
  );
};

const mapState = (state) => {
  const { title, artist, image, PlayerOverlayOpen } = state.player;
  return { title, artist, image, PlayerOverlayOpen };
};

const mapDispatch = (dispatch) => {
  return {
    updateSongInfoStart: (api) => dispatch(updateSongInfoStart(api)),
    openOverlay: () => dispatch(openOverlay()),
  };
};

export default connect(mapState, mapDispatch)(Player);
