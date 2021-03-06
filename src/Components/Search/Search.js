import React, { useState } from "react";
import { Box, InputBase, Grid, Typography } from "@mui/material";
import SongTable from "../SongTable/SongTable";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ spotifyApi }) => {
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);

  const formatSongData = (items) => {
    return items.map((item) => {
      return {
        ...item,
        contextUri: item.album.uri,
        position: item.track_number - 1,
      };
    });
  };

  const handleOnChange = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { value } = event.target;

    if (value === "") {
      setSongs([]);
      setLoading(false);
      return;
    }

    try {
      const result = await spotifyApi.searchTracks(value);

      const { items } = result.body.tracks;
      const formattedSongs = formatSongData(items);
      setSongs(formattedSongs);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "Background.paper",
        flex: 1,
        overflowY: "auto",
        minHeight: "calc(100vh - 90px)",
        bgcolor: "Background.paper",
        padding: "30px",
      }}
    >
      <form
        onSubmit={(event) => event.preventDefault()}
        style={{
          borderRadius: 20,
          padding: "6px 10px",
          display: "flex",
          alignItems: "center",
          width: 250,
          backgroundColor: "#ffffff",
          color: "#000000",
          marginBottom: 20,
        }}
      >
        <SearchIcon fontSize="large" sx={{ marginRight: "6px" }} />
        <InputBase
          id="input__for_songs"
          label={"Songs & Artists"}
          sx={{ color: "black" }}
          onChange={handleOnChange}
        />
      </form>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          {songs.length > 0 && (
            <SongTable
              songs={songs}
              loading={loading}
              spotifyApi={spotifyApi}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Search;
