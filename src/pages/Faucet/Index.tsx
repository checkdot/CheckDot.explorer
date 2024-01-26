import {Box, Typography} from "@mui/material";
import PageHeader from "../layout/PageHeader";
import {WelcomeBanner} from "./WelcomeBanner";
import FaucetControl from "./FaucetControl";

export default function FaucetPage() {
  return (
    <Box>
      <PageHeader />
      <Typography variant="h3" marginBottom={2}>
        Faucet
      </Typography>
      <WelcomeBanner />
      <FaucetControl />
    </Box>
  );
}
