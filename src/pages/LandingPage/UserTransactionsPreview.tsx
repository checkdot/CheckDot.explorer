import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as RRD from "react-router-dom";
import {Stack, Typography} from "@mui/material";
import {UserTransactionsTable} from "../Transactions/TransactionsTable";
import {useAugmentToWithGlobalSearchParams} from "../../routing";

export default function UserTransactionsPreview() {
  const versions = [1, 2, 3, 4, 5, 6];
  const augmentTo = useAugmentToWithGlobalSearchParams();

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h5">User Transactions</Typography>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          <UserTransactionsTable versions={versions} />
        </Box>
        <Box sx={{display: "flex", justifyContent: "center"}}>
          <Button
            component={RRD.Link}
            to={augmentTo("/transactions")}
            variant="primary"
            sx={{margin: "0 auto", mt: 3}}
          >
            View all Transactions
          </Button>
        </Box>
      </Stack>
    </>
  );
}
