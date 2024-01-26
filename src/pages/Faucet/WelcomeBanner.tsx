import {
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {grey} from "@mui/material/colors";
import React, {useState} from "react";
import {Banner} from "../../components/Banner";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FOLLOW_URL = "https://checkdot.io";

export function WelcomeBanner() {
  const theme = useTheme();
  const isOnMobile = !useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = () => {
    window.open(FOLLOW_URL, "_blank");
  };

  const followUsButton = (
    <Button
      variant="text"
      onClick={handleClick}
      sx={{alignSelf: "flex-start", transform: `translateX(-0.5rem)`}}
    >
      <Typography whiteSpace={"nowrap"}>FOLLOW US</Typography>
      <ArrowForwardIosIcon sx={{marginLeft: 2}} fontSize="small" />
    </Button>
  );

  const divider = (
    <Divider
      orientation="vertical"
      variant="middle"
      flexItem
      sx={{color: grey[200]}}
    />
  );

  const action = isOnMobile ? null : (
    <>
      {followUsButton}
      {divider}
    </>
  );

  const text = (
    <>
      This is a CheckDot Faucet. A website where you can get free CDT without
      adds or payments. Invite your friends to claim some coins from the faucet,
      it's a free trial of this amazing cryptocurrency!
      <br />
      <br />
      This is a public faucet where anyone can donate to spread the CheckDot
      blockchain. We provide the infrastructure to distribute the funds!
    </>
  );

  const children = isOnMobile ? (
    <Stack direction="column">
      {text}
      {followUsButton}
    </Stack>
  ) : (
    <>{text}</>
  );

  return (
    <>
      <Banner pillText="WELCOME" sx={{marginBottom: 2}} action={action}>
        {children}
      </Banner>
    </>
  );
}
