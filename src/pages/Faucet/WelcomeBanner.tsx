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
      {/* {followUsButton} */}
      {divider}
    </>
  );

  const text = (
    <>
      Here you can claim 10 CDTs once per address.<br/>
      Please complete the captcha and provide an address in the required field.
    </>
  );

  const children = isOnMobile ? (
    <Stack direction="column">
      {text}
    </Stack>
  ) : (
    <>{text}</>
  );

  return (
    <>
      <Banner pillText="FAUCET" pillColor="success" sx={{marginBottom: 2}} action={action}>
        {children}
      </Banner>
    </>
  );
}
