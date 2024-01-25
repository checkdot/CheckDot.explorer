import Typography from "@mui/material/Typography";
import HeaderSearch from "../layout/Search/Index";
import Box from "@mui/material/Box";
import NetworkInfo from "../Analytics/NetworkInfo/NetworkInfo";
import UserTransactionsPreview from "./UserTransactionsPreview";
import {LearnBanner} from "./LearnBanner";

export default function LandingPage() {
  return (
    <Box>
      <LearnBanner />
      <Typography variant="h3" component="h3" marginBottom={4}>
        CheckDot Explorer
      </Typography>
      <NetworkInfo isOnHomePage />
      <HeaderSearch />
      <UserTransactionsPreview />
    </Box>
  );
}
