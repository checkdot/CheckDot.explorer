import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import { PendingOutlined } from "@mui/icons-material";

// TODO: unify the colors
const SUCCESS_COLOR = "#00BFA5";
const SUCCESS_BACKGROUND_COLOR = "rgba(0,191,165,0.1)";
const ERROR_COLOR = "#F97373";
const ERROR_BACKGROUND_COLOR = "rgba(249,115,115,0.1)";
const PENDING_COLOR = "white";
const PENDING_BACKGROUND_COLOR = "#9a752f";

type TransactionStatusProps = {
  success: boolean;
};

export function TransactionStatus({success}: TransactionStatusProps) {
  return success ? (
    <Stack
      direction="row"
      spacing={1}
      paddingY={0.7}
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: SUCCESS_BACKGROUND_COLOR,
        width: 114,
      }}
      borderRadius={1}
    >
      <CheckCircleIcon
        fontSize="small"
        titleAccess="Executed successfully"
        sx={{color: SUCCESS_COLOR}}
      />
      <Typography variant="body2" sx={{color: SUCCESS_COLOR}}>
        Success
      </Typography>
    </Stack>
  ) : success === false ? ((
    <Stack
      direction="row"
      spacing={1}
      paddingY={0.7}
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: ERROR_BACKGROUND_COLOR,
        width: 90,
      }}
      borderRadius={1}
    >
      <ErrorOutlinedIcon
        fontSize="small"
        titleAccess="Failed to Execute"
        sx={{color: ERROR_COLOR}}
      />
      <Typography variant="body2" sx={{color: ERROR_COLOR}}>
        Fail
      </Typography>
    </Stack>
  )) : (
    <Stack
      direction="row"
      spacing={1}
      paddingY={0.7}
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: PENDING_BACKGROUND_COLOR,
        width: 90,
      }}
      borderRadius={1}
    >
      <PendingOutlined
        fontSize="small"
        titleAccess="Failed to Execute"
        sx={{color: PENDING_COLOR}}
      ></PendingOutlined>
      <Typography variant="body2" sx={{color: PENDING_COLOR}}>
        Pending
      </Typography>
    </Stack>
  );
}
