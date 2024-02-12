import {Dialog, DialogProps, IconButton, Stack} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {grey} from "../themes/colors/colorPalette";

interface StyledDialogProps extends DialogProps {
  handleDialogClose: () => void;
  children: React.ReactNode;
}

export default function StyledDialog({
  handleDialogClose,
  children,
  ...props
}: StyledDialogProps) {
  return (
    <Dialog onClose={handleDialogClose} {...props}>
      <IconButton
        onClick={handleDialogClose}
        sx={{
          position: "absolute",
          right: 4,
          top: 4,
          color: grey[450],
        }}
      >
        <CloseIcon />
      </IconButton>
      <Stack marginX={[3, 4]} marginY={4}>
        {children}
      </Stack>
    </Dialog>
  );
}
