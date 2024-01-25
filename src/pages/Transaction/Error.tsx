import React from "react";
import {Alert} from "@mui/material";

type ErrorProps = {
  error: any;
  txnHashOrVersion: string;
};

export default function Error({error, txnHashOrVersion}: ErrorProps) {
  return (
    <Alert severity="error">
      {`${error} Could not find a transaction with version or hash ${txnHashOrVersion}`}
    </Alert>
  );
}
