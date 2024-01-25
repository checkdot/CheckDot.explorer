import React from "react";
import {Alert} from "@mui/material";

type ErrorProps = {
  error: any;
  address?: string;
};

export default function Error({error, address}: ErrorProps) {
  return (
    <Alert severity="error" sx={{overflowWrap: "break-word"}}>
      {error}
      Account not found: {address}
    </Alert>
  );
}
