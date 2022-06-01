import React, { useEffect } from "react";
import { formatTime } from "../../utils/function";
import { PlayArrow, SkipPrevious, SkipNext, Pause } from "@mui/icons-material";
import { IconButton, Grid, Stack, Typography, Slider } from "@mui/material";
import { connect } from "react-redux";
import { pause, playNewSong, setProgress } from "../../store/actions/index";

const PlayerControlls = ({
  sliderStyle,
  deviceId,
  pause,
  playing,
  progress,
  loading,
  playNewSong,
  setProgress,
  spotifyApi,
  duration,
}) => {
  const skipStyle = { width: 28, height: 28 };

  useEffect(() => {
    let intervalId = null;
    if (playing) {
      intervalId = setInterval(() => {
        setProgress(progress + 1);
      }, 1000);
    } else if (!playing && progress !== 0) {
      clearInterval(intervalId);
    }

    return () => {
      // Unmount lifecycle
      clearInterval(intervalId);
    };
  }, [playing, progress]);

  const togglePlay = async () => {
    if (loading) return;

    if (!playing) {
      try {
        playNewSong(spotifyApi, {});
      } catch (error) {
        console.error(error);
      }
    } else {
      pause();
      await spotifyApi.pause();
    }
  };

  const handleOnSkipPrevious = async () => {
    if (loading) return;
    await spotifyApi.skipToPrevious();
    playNewSong(spotifyApi, {});
  };

  const handleOnSkipNext = async () => {
    if (loading) return;
    await spotifyApi.skipToNext();
    playNewSong(spotifyApi, {});
  };

  const handleOnChange = (event, value) => {
    console.log(value);
    setProgress(value);
  };

  const handleOnChangeCommitted = (event, value) => {
    spotifyApi.seek(value * 1000);
  };

  return (
    <Grid
      item
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: { xs: "flex-end", md: "center" },
        alignItems: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        justify="center"
        alignItems="center"
        sx={{ width: "100%" }}
      >
        <Stack
          spacing={1}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <IconButton
            size="small"
            sx={{ color: "text.primary" }}
            onClick={async () => handleOnSkipPrevious()}
          >
            <SkipPrevious sx={skipStyle} />
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: "text.primary" }}
            onClick={async () => togglePlay()}
          >
            {playing ? (
              <Pause sx={{ width: 38, height: 38 }} />
            ) : (
              <PlayArrow sx={{ width: 38, height: 38 }} />
            )}
          </IconButton>
          <IconButton
            size="small"
            sx={{ color: "text.primary" }}
            onClick={async () => handleOnSkipNext()}
          >
            <SkipNext sx={skipStyle} />
          </IconButton>
        </Stack>
        <Stack
          spacing={1}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
          sx={{ width: "75%" }}
        >
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {formatTime(progress)}
          </Typography>
          <Slider
            min={0}
            max={duration}
            sx={sliderStyle}
            size="medium"
            value={progress}
            onChange={handleOnChange}
            onChangeCommitted={handleOnChangeCommitted}
          />
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 12 }}
          >
            {formatTime(duration)}
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

const mapState = (state) => {
  const { playing, duration, progress, device_id, loading } = state.player;
  return {
    playing,
    duration,
    progress,
    deviceId: device_id,
    loading,
  };
};

const mapDispatch = (dispatch) => {
  return {
    pause: () => dispatch(pause()),
    playNewSong: (api) => dispatch(playNewSong(api)),
    setProgress: (progress) => dispatch(setProgress(progress)),
  };
};

export default connect(mapState, mapDispatch)(PlayerControlls);
