import React from "react";
import {Alert} from "@mui/material";

type ErrorProps = {
  error: any;
  height: string;
};

export default function Error({error, height}: ErrorProps) {
  if (error) {
    return (
      <Alert severity="error">
        {`${error} Could not find a block with height ${height}`}
      </Alert>
    );
  } else {
    return (
      <Alert severity="error">
        Unknown error fetching block with height {height}:<br />
        {error.message}
        <br />
        Try again later
      </Alert>
    );
  }
}
