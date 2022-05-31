import React from "react";
import { Box, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";

const NavPlaylist = ({ name, id, loading }) => {
  return (
    <Link
      to={loading ? "" : `/playlist/${id}`}
      style={{ textDecoration: "none" }}
    >
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
        {loading ? (
          <Skeleton variant={"text"} height={"20px"} width={"80px"} />
        ) : (
          name
        )}
      </Box>
    </Link>
  );
};

export default NavPlaylist;
