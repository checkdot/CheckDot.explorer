import {useParams} from "react-router-dom";
import {Stack, Grid, Alert} from "@mui/material";
import React from "react";
import BlockTitle from "./Title";
import BlockTabs from "./Tabs";
import Error from "./Error";
import PageHeader from "../layout/PageHeader";
import { useNetworkSelector } from "../../global-config/network-selection";
import { useQuery } from "@tanstack/react-query";
import { api_getBlockByNumber } from "../../queries/api";
import LoadingModal from "../../components/LoadingModal";
import { ethers } from "ethers";
import { buildBlockFromQueryResult } from "../utils";

const parseResult = (queryResult: any) => {
  if (queryResult == null || queryResult.result === null) {
    throw 'Not Found';
  }
  return buildBlockFromQueryResult(queryResult.result);
}

export default function BlockPage() {
  const {height} = useParams();
  const [selectedNetwork,] = useNetworkSelector();

  const blockQuery: any = height ? useQuery({
    queryKey: ["api_getBlockByNumber"],
    queryFn: async () => {
      const result = await api_getBlockByNumber(selectedNetwork, height);
      return parseResult(result);
    }
  }) : { error: true };

  return (
    <Grid container spacing={1}>
      <PageHeader />
      <Grid item xs={12}>
        <Stack direction="column" spacing={4} marginTop={2}>
          <BlockTitle />
          { blockQuery?.fetchStatus === 'fetching' && (<LoadingModal open={true} />) }
          { blockQuery?.error && (<Error error={blockQuery?.error} height={height ?? ""} />) }
          { blockQuery?.data && (<BlockTabs data={blockQuery.data} />) }
        </Stack>
      </Grid>
    </Grid>
  );
}
