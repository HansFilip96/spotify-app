import * as actionTypes from "./actionTypes";

export const openOverlay = () => {
  return { type: actionTypes.OPEN_OVERLAY };
};

export const closeOverlay = () => {
  return { type: actionTypes.CLOSE_OVERLAY };
};

export const addDevice = (device_id) => {
  return { type: actionTypes.ADD_DEVICE_ID, payload: device_id };
};

export const play = () => {
  return { type: actionTypes.PLAY };
};

export const pause = () => {
  return { type: actionTypes.PAUSE };
};

export const setProgress = (progress) => {
  return { type: actionTypes.SET_PROGRESS, payload: progress };
};

export const updatePlayerStart = () => {
  return { type: actionTypes.UPDATE_PLAYER_START };
};

export const updatePlayerSuccess = (payload) => {
  return { type: actionTypes.UPDATE_PLAYER_SUCCESS, payload };
};

export const updatePlayerFail = (error) => {
  return { type: actionTypes.UPDATE_PLAYER_FAIL, payload: error };
};

export const playSpecifiedSong = (spotifyApi, song) => {
  return async (dispatch) => {
    dispatch(updatePlayerStart());
    try {
      await spotifyApi.play(song);
      const { title, image, artist, duration, position } = song;
      dispatch(
        updatePlayerSuccess({
          title,
          image,
          artist,
          duration,
          position,
          progress: 0,
        })
      );
      dispatch(play());
    } catch (error) {
      dispatch(updatePlayerFail(error));
    }
  };
};

export const playNewSong = (spotifyApi, song) => {
  return async (dispatch) => {
    dispatch(updatePlayerStart());
    console.log("hejsan");
    try {
      await spotifyApi.play(song);

      dispatch(play());

      // jävligt dålig kod!
      setTimeout(async () => {
        const track = await getMyCurrentPlayingTrack(spotifyApi);
        dispatch(updatePlayerSuccess(track));
      }, 1000);
    } catch (error) {
      dispatch(updatePlayerFail(error));
    }
  };
};

export const updateSongInfo = (spotifyApi) => {
  return async (dispatch) => {
    dispatch(updatePlayerStart());
    try {
      const track = await getMyCurrentPlayingTrack(spotifyApi);

      dispatch(updatePlayerSuccess(track));
    } catch (error) {
      dispatch(updatePlayerFail(error));
    }
  };
};

export const updateSongInfoStart = (spotifyApi) => {
  return async (dispatch, getState) => {
    dispatch(updatePlayerStart());
    try {
      const state = getState();
      const { device_id } = state.player;
      const playback = await spotifyApi.getMyCurrentPlaybackState();
      console.log({ playback });
      //  check if a device is playing music right now
      if (playback.body && playback.body.is_playing) {
        await spotifyApi.transferMyPlayback([device_id], true);
        dispatch(pause());
        dispatch(updateSongInfo(spotifyApi));
      } else {
        await spotifyApi.transferMyPlayback([device_id], false);
        const currentSong = await spotifyApi.getMyCurrentPlayingTrack();
        if (currentSong.body) {
          dispatch(updateSongInfo(spotifyApi));
        } else {
          const id = setInterval(async () => {
            const currentSong = await spotifyApi.getMyCurrentPlayingTrack();
            if (currentSong.body) {
              clearInterval(id);
              dispatch(updateSongInfo(spotifyApi));
            }
          }, 500);
        }
      }
    } catch (error) {
      dispatch(updatePlayerFail(error));
    }
  };
};

// inte en action, en vanlig funktion
const getMyCurrentPlayingTrack = async (spotifyApi) => {
  const currentSong = await spotifyApi.getMyCurrentPlayingTrack();
  const { item } = currentSong.body;
  const duration = item.duration_ms / 1000;
  const progress = currentSong.body.progress_ms / 1000;
  return {
    title: item.title,
    image: item.album.images[1],
    artist: item.artists[0].name,
    duration,
    progress,
  };
};
