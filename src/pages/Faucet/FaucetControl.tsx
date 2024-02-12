import {
  AccountBalanceWalletOutlined,
  WaterDropOutlined,
} from "@mui/icons-material";
import {Alert, Box, Button, InputAdornment, TextField} from "@mui/material";
import CanvasCaptcha from "./components/CaptchaModal";
import {useState} from "react";
import { ethers } from "ethers";
import { useNetworkSelector } from "../../global-config/network-selection";
import { api_claimFaucet } from "../../queries/api";
import HashButton, { HashType } from "../../components/HashButton";

export default function FaucetControl() {
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const [status, setStatus] = useState<"success" | "error">();
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [hash, setHash] = useState<string | undefined>(undefined);

  const [network,] = useNetworkSelector();

  const onFaucet = async () => {
    try {
      const queryResult = await api_claimFaucet(network, address);

      if (queryResult.result !== undefined && typeof queryResult.result === 'string') {
        setHash(queryResult.result);
      } else if (queryResult.result !== undefined && queryResult.result.error !== undefined) {
        setError(queryResult.result.error);
      }
      setStatus("success");
    } catch (e) {

      setStatus("error");
    }
  };

  const onSubmit = () => {
    // check add
    setError('');
    if (!ethers.utils.isAddress(address)) {
      setError('Invalid Address Format');
      return ;
    }
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
        onChange={(event) => { setAddress(event.target.value); }}
      />
      {status === 'success' && hash && (
        <Alert severity={'success'} sx={{marginTop: '16px'}}>
          Transaction Succesfully Launched
          <HashButton
            hash={hash}
            type={HashType.TRANSACTION}
            sx={{display: "flex", justifyContent: "flex-end"}}
          />
        </Alert>
      )}
      {status === 'error' && (
        <Alert severity={'error'} sx={{marginTop: '16px'}}>
          Failed to get Faucet. Please contact the team
        </Alert>
      )}
      {error !== '' && (
        <Alert severity={'error'} sx={{marginTop: '16px'}}>
        {error}
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
