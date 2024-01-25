import {Button} from "@mui/material";
import Forward from "../assets/svg/forward.svg?react";
import {useTheme} from "@mui/system";
import {grey, primary} from "../themes/colors/colorPalette";

export default function ConnectButton() {
  const theme = useTheme();

  return (
    <Button
      sx={{
        fontWeight: 500,
        color: theme.palette.mode === "dark" ? grey[50] : primary[900],
        backgroundColor:
          theme.palette.mode === "dark" ? primary[700] : primary[600],
        padding: "0.5rem 1rem",
        ":hover": {
          backgroundColor:
            theme.palette.mode === "dark" ? primary[700] : primary[600],
          filter: "brightness(0.95)",
        },
      }}
      endIcon={<Forward />}
    >
      Connect Wallet
    </Button>
  );
}
