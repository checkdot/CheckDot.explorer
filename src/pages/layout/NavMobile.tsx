import React, {useState} from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HamburgerIcon from "../../assets/svg/icon_hamburger.svg?react";
import CloseIcon from "../../assets/svg/icon_close.svg?react";
import {grey} from "../../themes/colors/colorPalette";
import Box from "@mui/material/Box";
import {Divider, useTheme} from "@mui/material";
import {useNavigate} from "../../routing";
import {useGlobalState} from "../../global-config/GlobalConfig";

export default function NavMobile() {
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const [state] = useGlobalState();
  const menuOpen = Boolean(menuAnchorEl);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleCloseAndNavigate = (to: string) => {
    setMenuAnchorEl(null);
    navigate(to);
  };

  return (
    <Box sx={{display: {xs: "block", md: "none"}}}>
      <Button
        id="nav-mobile-button"
        aria-controls={menuOpen ? "nav-mobile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={menuOpen ? "true" : undefined}
        onClick={handleIconClick}
        sx={{
          minWidth: "0",
          width: "1.5rem",
          padding: "0",
          ml: 2,
          color: "inherit",
          "&:hover": {
            background: "transparent",
            color: `${theme.palette.mode === "dark" ? grey[100] : grey[400]}`,
          },
          "&[aria-expanded=true]": {opacity: "0.7"},
        }}
      >
        {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Button>
      <Menu
        anchorEl={menuAnchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "nav-mobile-button",
          sx: {
            minWidth: 240,
            padding: "1rem",
          },
        }}
        sx={{
          marginTop: "1rem",
          boxShadow: 0,
          minWidth: "400px",
          maxWidth: "none",
        }}
      >
        <MenuItem onClick={() => handleCloseAndNavigate("/")}>
          Home
        </MenuItem>
        <MenuItem onClick={() => handleCloseAndNavigate("/analytics")}>
          Analytics
        </MenuItem>
        <MenuItem onClick={() => handleCloseAndNavigate("/validators")}>
          Validators
        </MenuItem>
        <MenuItem onClick={() => handleCloseAndNavigate("/faucet")}>
          Faucet
        </MenuItem>
        <MenuItem onClick={() => handleCloseAndNavigate("/challenges")}>
          Leaderboard
        </MenuItem>
        <Divider />
      </Menu>
    </Box>
  );
}
