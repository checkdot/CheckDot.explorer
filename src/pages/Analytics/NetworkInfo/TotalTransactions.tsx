import React from "react";
import {Stack, Typography} from "@mui/material";
import {DoubleMetricCard} from "./MetricCard";
import {numberWithCommas} from "../utils";

export default function TotalTransactions({data, card}: any) {
  return card ? (
    <DoubleMetricCard
      data1={`${data?.totalSupply ? numberWithCommas(data.totalTransactions) : "..."}`}
      data2="49 Gwei"
      label1="Total Transactions"
      label2="Gas Price"
      cardLabel="Transactions"
      tooltip="Total Transactions"
    />
  ) : (
    <Stack direction="column">
      <Typography variant="body2" alignSelf="flex-end">
        {`TOTAL TRANSACTIONS: ${data?.totalTransactions}`}
      </Typography>
    </Stack>
  );
}
