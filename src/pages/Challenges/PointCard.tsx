import React from "react";
import {Stack, Typography} from "@mui/material";
import {Card} from "../../components/Card";
import {grey} from "../../themes/colors/colorPalette";
import StyledTooltip from "../../components/StyledTooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type PointCardProps = {
  address: string;
};

export default function PointCard({address}: PointCardProps) {
  const point = "1";

  return point ? (
    <Card height="auto">
      <Stack spacing={1.5} marginY={1}>
        <Typography fontSize={17} fontWeight={700}>
          {`${point} Points`}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography fontSize={12} color={grey[450]}>
            Total Points
          </Typography>
          <StyledTooltip title="The total points for this wallet.">
            <InfoOutlinedIcon sx={{fontSize: 15, color: grey[450]}} />
          </StyledTooltip>
        </Stack>
      </Stack>
    </Card>
  ) : null;
}
