import {Stack, Grid, Alert} from "@mui/material";
import {useGlobalState} from "../../global-config/GlobalConfig";
import {useParams} from "react-router-dom";
import Error from "./Error";
import TransactionTitle from "./Title";
import TransactionTabs from "./Tabs";
import PageHeader from "../layout/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { useNetworkSelector } from "../../global-config/network-selection";
import { api_getTransactionReceipt } from "../../queries/api";
import { ethers } from "ethers";
import LoadingModal from "../../components/LoadingModal";
import moment from "moment";
import { buildTransactionFromQueryResult } from "../utils";

const parseResult = (queryResult: any) => {
  if (queryResult == null || queryResult.result === null) {
    throw 'Not Found';
  }
  return buildTransactionFromQueryResult(queryResult.result);
}

export default function TransactionPage() {
  const [state] = useGlobalState();
  const {txnHashOrVersion: txnParam} = useParams();
  const txnHashOrVersion = txnParam ?? "";

  const [selectedNetwork,] = useNetworkSelector();

  const txQuery = useQuery({
    queryKey: ["api_getTransactionReceipt"],
    queryFn: async () => {
      const result = await api_getTransactionReceipt(selectedNetwork, txnHashOrVersion);
      return parseResult(result);
    }
  });

  return (
    <Grid container>
      <PageHeader />
      <Grid item xs={12}>
        { txQuery.fetchStatus === 'fetching' && (<LoadingModal open={true} />) }
        { txQuery.error && (<Error error={txQuery.error} txnHashOrVersion={txnHashOrVersion} />)}
        { txQuery.data && (<>
          <Stack direction="column" spacing={4} marginTop={2}>
          <TransactionTitle transaction={txQuery.data} />
          <TransactionTabs transaction={txQuery.data} />
        </Stack>
        </>)}
      </Grid>
    </Grid>
  );
}
