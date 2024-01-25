import {Box, Stack, Typography} from "@mui/material";
import PageHeader from "../layout/PageHeader";
import UserTransactions from "./UserTransactions";
import {useGlobalState} from "../../global-config/GlobalConfig";

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
      <UserTransactions />
    </Box>
  );
}
