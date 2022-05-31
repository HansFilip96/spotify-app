import React, { useEffect } from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import PlayerControlls from "../PlayerControlls/PlayerControlls";
import VolumeControlls from "../VolumeControlls/VolumeControlls";
import { connect } from "react-redux";
import { updateSongInfoStart } from "../../store/actions";

const Player = ({ spotifyApi, updateSongInfoStart, title, artist, image }) => {
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

  return (
    <Box>
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
          xs={3}
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
        <PlayerControlls sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
        <VolumeControlls sliderStyle={sliderStyle} spotifyApi={spotifyApi} />
      </Grid>
    </Box>
  );
};

const mapState = (state) => {
  const { title, artist, image } = state.player;
  return { title, artist, image };
};

const mapDispatch = (dispatch) => {
  return {
    updateSongInfoStart: (api) => dispatch(updateSongInfoStart(api)),
  };
};

export default connect(mapState, mapDispatch)(Player);
