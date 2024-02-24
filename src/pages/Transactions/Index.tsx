import {Box, Grid, Stack, Typography} from "@mui/material";
import PageHeader from "../layout/PageHeader";
import UserTransactions from "./UserTransactions";
import {useGlobalState} from "../../global-config/GlobalConfig";
import TotalTransactions from "../Analytics/NetworkInfo/TotalTransactions";

export default function TransactionsPage() {
  const [state] = useGlobalState();

  return (
    <Box>
      <PageHeader />
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" marginBottom={2}>
          User Transactions
        </Typography>
      </Stack>
      {/* <Grid item xs={12} md={12} lg={12}>
        <Stack direction="column">
          <Typography variant="body2" alignSelf="flex-end">
            {`LASTS: 50`}
          </Typography>
        </Stack>
      </Grid> */}
      <UserTransactions />
    </Box>
  );
}
