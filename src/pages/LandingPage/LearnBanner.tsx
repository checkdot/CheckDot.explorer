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

const LEARN_URL = "https://checkdot.io";

export function LearnBanner() {
  const theme = useTheme();
  const isOnMobile = !useMediaQuery(theme.breakpoints.up("md"));

  const handleClick = () => {
    window.open(LEARN_URL, "_blank");
  };

  const learnMoreButton = (
    <Button
      variant="text"
      onClick={handleClick}
      sx={{alignSelf: "flex-start", transform: `translateX(-0.5rem)`}}
    >
      <Typography>GO TO CHECKDOT</Typography>
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
      {learnMoreButton}
      {divider}
    </>
  );

  const text =
    "Create your own decentralized app with the recently launched CheckDot website!";

  const children = isOnMobile ? (
    <Stack direction="column">
      {text}
      {learnMoreButton}
    </Stack>
  ) : (
    <>{text}</>
  );

  return (
    <>
      <Banner pillText="NEW" sx={{marginBottom: 2}} action={action}>
        {children}
      </Banner>
    </>
  );
}
