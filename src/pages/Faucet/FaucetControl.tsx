import {
  AccountBalanceWalletOutlined,
  WaterDropOutlined,
} from "@mui/icons-material";
import {Alert, Box, Button, InputAdornment, TextField} from "@mui/material";
import CanvasCaptcha from "./components/CaptchaModal";
import {useState} from "react";

export default function FaucetControl() {
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "error">();

  const onFaucet = () => {
    setStatus("success");
  };

  const onSubmit = () => {
    setCaptchaOpen(true);
  };

  return (
    <Box mt={6}>
      <TextField
        label="Address"
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              sx={{ml: 0.5, marginTop: "0!important"}}
            >
              <AccountBalanceWalletOutlined
                fontSize="medium"
                color="secondary"
              />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      {status && (
        <Alert severity={status} sx={{marginTop: '16px'}}>
          {status === "success"
            ? "Got 100 CDT Successfully"
            : "Failed to get Faucet. Please contact the team"}
        </Alert>
      )}
      <Button
        variant="contained"
        sx={{
          width: "8rem",
          height: "3rem",
          display: "flex",
          alignItems: "center",
          marginTop: "24px",
        }}
        onClick={onSubmit}
      >
        Faucet
        <WaterDropOutlined />
      </Button>
      <CanvasCaptcha
        open={captchaOpen}
        handleDialogClose={() => setCaptchaOpen(() => false)}
        handleFaucet={onFaucet}
      />
    </Box>
  );
}
