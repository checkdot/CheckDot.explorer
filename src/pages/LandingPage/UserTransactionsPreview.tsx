import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import * as RRD from "react-router-dom";
import {Stack, Typography} from "@mui/material";
import {UserTransactionsTable} from "../Transactions/TransactionsTable";
import {useAugmentToWithGlobalSearchParams} from "../../routing";
import { useQuery } from "@tanstack/react-query";
import { api_getLatestTransactions } from "../../queries/api";
import { useNetworkSelector } from "../../global-config/network-selection";
import { buildTransactionFromQueryResult } from "../utils";

export default function UserTransactionsPreview() {
  const [selectedNetwork,] = useNetworkSelector();

  const lastTransactions = useQuery({
    queryKey: ["api_getLatestTransactions"],
    queryFn: async () => {
      try {
        const queryResult = await api_getLatestTransactions(selectedNetwork);
        const transactions = queryResult.result.map((x: any) => buildTransactionFromQueryResult(x));
        console.log(transactions);
        return transactions;
      } catch(e) {
        console.error(e);
        return [];
      }
    },
    refetchInterval: 10000
  });
  // const versions = [1, 2, 3, 4, 5, 6];
  const augmentTo = useAugmentToWithGlobalSearchParams();

  return (
    <>
        <Stack spacing={2}>
          <Typography variant="h5">Recent User Transactions</Typography>
          <Box sx={{width: "auto", overflowX: "auto"}}>
            { lastTransactions.data && (<UserTransactionsTable transactions={lastTransactions.data} />)}
          </Box>
          {/* <Box sx={{display: "flex", justifyContent: "center"}}>
            <Button
              component={RRD.Link}
              to={augmentTo("/transactions")}
              variant="primary"
              sx={{margin: "0 auto", mt: 3}}
            >
              View all Transactions
            </Button>
          </Box> */}
        </Stack>
    </>
  );
}
