import React from "react";
import {Box, Container, Stack, Typography, useTheme} from "@mui/material";

import Grid from "@mui/material/Unstable_Grid2";

import GithubLogo from "../../assets/github.svg?react";
import DiscordLogo from "../../assets/discord.svg?react";
import TwitterLogo from "../../assets/twitter.svg?react";
import MediumLogo from "../../assets/medium.svg?react";
import LinkedInLogo from "../../assets/linkedin.svg?react";
import {grey} from "../../themes/colors/colorPalette";
import SvgIcon from "@mui/material/SvgIcon";

import LogoIconDark from "../../assets/svg/cdt_logo_icon_dark.svg?react";
import LogoIconLight from "../../assets/svg/cdt_logo_icon_light.svg?react";
import {Link} from "../../routing";
import { FavoriteOutlined, MonitorHeartOutlined } from "@mui/icons-material";

const socialLinks = [
  {title: "Git", url: "https://github.com/checkdot", icon: GithubLogo},
  {
    title: "Discord",
    url: "https://discord.com/invite/checkdot",
    icon: DiscordLogo,
  },
  {title: "Twitter", url: "https://twitter.com/Checkdot_proto", icon: TwitterLogo},
  {title: "Medium", url: "https://checkdot.medium.com", icon: MediumLogo},
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/checkdot/",
    icon: LinkedInLogo,
  },
];

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        background: theme.palette.mode === "dark" ? grey[900] : "white",
        color: theme.palette.mode === "dark" ? grey[100] : "rgba(18,22,21,1)",
        mt: 8,
      }}
    >
      <Container maxWidth="xl" sx={{paddingTop: "2rem", paddingBottom: "2rem"}}>
        <Grid
          container
          gap={4}
          alignContent="center"
          alignItems="center"
          direction={{xs: "column", md: "row"}}
        >
          <Grid
            xs="auto"
            gap={1}
            container
            alignItems={{xs: "center", md: "start"}}
            direction="column"
          >
            <Link
              color="inherit"
              to="https://checkdot.io/"
              target="_blank"
              title="CheckDot"
              sx={{width: "8rem", mr: {md: 2}}}
            >
              {isDark ? <LogoIconDark /> : <LogoIconLight />}
            </Link>
            <Grid direction="row" padding="0">
              <Typography
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                    fontFamily: "apparat, Geneva, Tahoma, Verdana, sans-serif",
                  },
                }}
                fontSize="0.8rem"
              >
                © {new Date().getFullYear()}{" "}
                <Box component="span" sx={{whiteSpace: "nowrap"}}>
                  CheckDot
                </Box>
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent={{xs: "center", md: "start"}}
              >
                <Link
                  color="inherit"
                  to="https://checkdot.io/CheckDot-Privacy-Policy-Document.pdf"
                  target="_blank"
                  sx={{
                    fontSize: "0.8rem",
                    fontFamily: "apparat, Geneva, Tahoma, Verdana, sans-serif",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  color="inherit"
                  to="https://aptoslabs.com"
                  target="_blank"
                  sx={{
                    fontSize: "0.8rem",
                    fontFamily: "apparat, Geneva, Tahoma, Verdana, sans-serif",
                  }}
                  style={{ marginTop: '-6.5px' }}
                >
                  Design Based on Aptos Explorer <FavoriteOutlined fontSize="small" style={{ paddingTop: '12px', width: '16px' }} color={'error'}></FavoriteOutlined>
                </Link>
              </Stack>
            </Grid>
          </Grid>

          <Grid
            xs="auto"
            sx={{marginLeft: {xs: "0", md: "auto"}}}
            container
            justifyContent="end"
          >
            <Grid
              container
              justifyContent={{xs: "center", md: "end"}}
              spacing={3}
              direction="row"
            >
              {socialLinks.map((link) => (
                <Grid key={link.title}>
                  <Link
                    color="inherit"
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                    width="26px"
                    sx={{display: "block"}}
                  >
                    <SvgIcon component={link.icon} inheritViewBox />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
