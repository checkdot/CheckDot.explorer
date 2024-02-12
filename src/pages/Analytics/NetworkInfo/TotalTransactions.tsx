import React from "react";
import {Stack, Typography} from "@mui/material";

export default function TotalTransactions({ data }: any) {
  return (
    <Stack direction="column">
      <Typography variant="body2" alignSelf="flex-end">
        {`TOTAL TRANSACTIONS: ${data?.totalTransactions}`}
      </Typography>
    </Stack>
  );
}
