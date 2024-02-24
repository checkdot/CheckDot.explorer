import React from "react";
import {Stack, Typography} from "@mui/material";
import {DoubleMetricCard} from "./MetricCard";
import {numberWithCommas} from "../utils";
import { useQuery } from "@tanstack/react-query";

export default function TotalTransactions({data, card}: any) {

  const intervalDataDisplay = useQuery({
    queryKey: ['intervalDataDisplay'],
    queryFn: () => {
      return data;
    },
    refetchInterval: 1000
  });

  return card ? (
    <DoubleMetricCard
      data1={`${intervalDataDisplay?.data && intervalDataDisplay.data?.totalTransactions ? numberWithCommas(intervalDataDisplay.data.totalTransactions) : "..."}`}
      data2={`${intervalDataDisplay?.data && intervalDataDisplay.data?.gasPrice ? `${numberWithCommas(intervalDataDisplay.data.gasPrice.toFixed(0))} Gwei` : "..."}`}
      label1="Total Transactions"
      label2="Gas Price"
      cardLabel="Transactions"
      tooltip="Total Transactions"
    />
  ) : (
    <Stack direction="column">
      <Typography variant="body2" alignSelf="flex-end">
        {`TOTAL TRANSACTIONS: ${intervalDataDisplay?.data && intervalDataDisplay.data?.totalTransactions ? intervalDataDisplay.data?.totalTransactions : "..."}`}
      </Typography>
    </Stack>
  );
}
