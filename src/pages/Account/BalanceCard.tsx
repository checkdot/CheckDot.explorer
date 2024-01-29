import React from "react";
import {Stack, Typography} from "@mui/material";
import {Card} from "../../components/Card";
import {grey} from "../../themes/colors/colorPalette";
import StyledTooltip from "../../components/StyledTooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { ethers } from "ethers";

type BalanceCardProps = {
  address: string;
  balance: number;
};

export default function BalanceCard({address, balance}: BalanceCardProps) {

  return balance ? (
    <Card height="auto">
      <Stack spacing={1.5} marginY={1}>
        <Typography fontSize={17} fontWeight={700}>
          {`${balance} CDT`}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography fontSize={12} color={grey[450]}>
            Balance
          </Typography>
          <StyledTooltip title="This balance reflects the amount of CDT tokens held in your wallet.">
            <InfoOutlinedIcon sx={{fontSize: 15, color: grey[450]}} />
          </StyledTooltip>
        </Stack>
      </Stack>
    </Card>
  ) : null;
}
