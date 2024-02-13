import Typography from "@mui/material/Typography";
import HeaderSearch from "../layout/Search/Index";
import ExplorerNetworkInfo from "../Analytics/NetworkInfo/ExplorerNetworkInfo";
import {Grid} from "@mui/material";
import LatestBlocksPreview from "./LatestBlocksPreview";
import LatestTransactionsPreview from "./LatestTransactionsPreview";

export default function HomeExplorerPage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h3" component="h3" marginBottom={4}>
          CheckDot Explorer
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <HeaderSearch />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <ExplorerNetworkInfo />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <LatestBlocksPreview />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <LatestTransactionsPreview />
      </Grid>
    </Grid>
  );
}
