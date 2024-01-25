import React from "react";
import {Stack, Typography} from "@mui/material";

export default function TotalTransactions() {
  return (
    <Stack direction="column">
      <Typography variant="body2" alignSelf="flex-end">
        {`TOTAL TRANSACTIONS: ${"418,505,734"}`}
      </Typography>
    </Stack>
  );
}
