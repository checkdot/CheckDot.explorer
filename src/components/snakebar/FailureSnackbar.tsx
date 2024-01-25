import {Snackbar, Alert, Typography} from "@mui/material";
import {CloseAction} from "./TransactionResponseSnackbar";
import React from "react";
import {Link} from "../../routing";

type FailureSnackbarProps = {
  onCloseSnackbar: () => void;
  data: any;
};

export default function FailureSnackbar({
  onCloseSnackbar,
  data,
}: FailureSnackbarProps) {
  const {hash} = data;

  return (
    <Snackbar
      open={true}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Alert
        variant="filled"
        severity="error"
        action={<CloseAction onCloseSnackbar={onCloseSnackbar} />}
      >
        <Typography variant="inherit">
          Transaction {""}
          <Link to={`/tx/${hash}`} color="inherit" target="_blank">
            {hash}
          </Link>{" "}
          failed{" "}
          {"vm_status" in data && data.vm_status
            ? `with "${data.vm_status}"`
            : "."}
        </Typography>
      </Alert>
    </Snackbar>
  );
}
