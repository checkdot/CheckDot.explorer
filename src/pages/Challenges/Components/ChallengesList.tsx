import * as React from "react";
import {Box, Chip, Typography} from "@mui/material";
import {useTheme} from "@mui/system";
import {grey, primary} from "../../../themes/colors/colorPalette";
import {DoneAll} from "@mui/icons-material";
import { TimeIcon } from "@mui/x-date-pickers";

export function ChallengeRow({data}: any) {
  const theme = useTheme();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={4}
      sx={{
        userSelect: "none",
        backgroundColor: `${
          theme.palette.mode === "dark" ? grey[800] : grey[50]
        }`,
        borderRadius: "12px",
        marginTop: "8px",
        paddingRight: 3,
        filter: data.available === false ? 'brightness(0.2)' : undefined
      }}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box
          component={"img"}
          src={data.image}
          width={80}
          height={80}
          minWidth={80}
          bgcolor={theme.palette.mode === "dark" ? grey[700] : grey[100]}
          borderRadius={"12px"}
          marginRight={3}
        />
        <Box paddingY={1}>
          <Typography style={{ userSelect: 'text' }}>{data.title}</Typography>
          <Chip
            label={`${data.points} Points`}
            size="small"
            color={"success"}
            sx={{fontSize: "0.75rem", marginTop: "0.5rem"}}
          />
        </Box>
      </Box>
      {data.available === undefined && data.validated !== true && data.progress !== undefined && (<Chip
            label={data.progress}
            size="small"
            color={"success"}
            sx={{fontSize: "0.75rem", marginTop: "0.5rem"}}
          />)}
      {data.validated && <DoneAll color="success" />}
      {data.available === false && <TimeIcon color="warning" />}
    </Box>
  );
}

type ChallengesListProps = {
  data: any[];
};

export default function ChallengesList({data}: ChallengesListProps) {
  return (
    <Box>
      {data.map((item, i) => {
        return <ChallengeRow key={i} data={item} />;
      })}
    </Box>
  );
}
