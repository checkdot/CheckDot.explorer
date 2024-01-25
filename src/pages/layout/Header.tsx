import React from "react";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import NetworkSelect from "./NetworkSelect";
import {useColorMode} from "../../context";
import {useMediaQuery, useTheme} from "@mui/material";
import LogoIconDark from "../../assets/svg/cdt_logo_icon_dark.svg?react";
import LogoIconLight from "../../assets/svg/cdt_logo_icon_light.svg?react";
import IconLight from "../../assets/svg/icon_light.svg?react";
import IconDark from "../../assets/svg/icon_dark.svg?react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import {grey} from "../../themes/colors/colorPalette";
import {useInView} from "react-intersection-observer";
import FeatureBar from "./FeatureBar";
import {Link} from "../../routing";
import ConnectButton from "../../components/ConnectButton";

export default function Header() {
  const scrollTop = () => {
    const docElement = document.documentElement;
    const windowTop =
      (window.pageYOffset || docElement.scrollTop) -
      (docElement.clientTop || 0);

    if (windowTop > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const {toggleColorMode} = useColorMode();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const {ref, inView} = useInView({
    rootMargin: "-40px 0px 0px 0px",
    threshold: 0,
  });

  const isOnMobile = !useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          background: "transparent",
          height: "5rem",
          width: "100%",
          position: "absolute",
        }}
        ref={ref}
      ></Box>
      <MuiAppBar
        sx={{
          position: "sticky",
          top: "0",
          borderRadius: "0",
          backdropFilter: "blur(10px)",
          background: isDark ? "#18171c" : "#fff",
          ...(!inView &&
            isDark && {
              borderBottom: `1px solid ${theme.palette.common}`,
            }),
          ...(!inView &&
            !isDark && {
              borderBottom: `2px solid rgba(18,22,21,0.05)`,
            }),
        }}
      >
        <FeatureBar />
        <Container maxWidth={false}>
          <Toolbar
            sx={{
              height: "5rem",
              color:
                theme.palette.mode === "dark" ? grey[50] : "rgba(18,22,21,1)",
            }}
            disableGutters
          >
            <Link
              onClick={scrollTop}
              to="/"
              color="inherit"
              underline="none"
              sx={{
                height: {xs: "30px", sm: "30px", md: "40px"},
                marginRight: "auto",
              }}
            >
              {isDark ? <LogoIconDark /> : <LogoIconLight />}
            </Link>

            <Nav />
            <NetworkSelect />
            <Button
              onClick={toggleColorMode}
              sx={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                padding: "0",
                minWidth: "30px",
                marginLeft: "1rem",
                color: "inherit",
                "&:hover": {background: "transparent", opacity: "0.8"},
              }}
            >
              {theme.palette.mode === "light" ? <IconLight /> : <IconDark />}
            </Button>
            <NavMobile />
            {/* {!isOnMobile && (
              <Box sx={{marginLeft: "1rem"}}>
                <ConnectButton />
              </Box>
            )} */}
          </Toolbar>
        </Container>
      </MuiAppBar>
    </>
  );
}
