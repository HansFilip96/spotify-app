import React, { useState } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, List, Search } from "@mui/icons-material";

const MobileNav = () => {
  const [value, setValue] = useState(0);

  const styledNav = { color: "text.secondary" };

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
      <BottomNavigation
        sx={{ bgcolor: "Background.paper" }}
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        <BottomNavigationAction sx={styledNav} label="Hem" icon={<Home />} />
        <BottomNavigationAction sx={styledNav} label="Sök" icon={<Search />} />
        <BottomNavigationAction
          sx={styledNav}
          label="Ditt Bibliotek"
          icon={<List />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default MobileNav;
