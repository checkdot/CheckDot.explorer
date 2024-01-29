import * as React from "react";
import {Box, Chip, Typography} from "@mui/material";
import {useTheme} from "@mui/system";
import {grey, primary} from "../../../themes/colors/colorPalette";
import {DoneAll} from "@mui/icons-material";

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
      }}
    >
      <Box display={"flex"} alignItems={"center"}>
        <Box
          component={"img"}
          src="https://checkdot.io/assets/img/landing/cdt-token.png"
          width={80}
          height={80}
          minWidth={80}
          bgcolor={theme.palette.mode === "dark" ? grey[700] : grey[100]}
          borderRadius={"12px"}
          marginRight={3}
        />
        <Box paddingY={1}>
          <Typography>{data.title}</Typography>
          <Chip
            label={`${data.points} Points`}
            size="small"
            color={"success"}
            sx={{fontSize: "0.75rem", marginTop: "0.5rem"}}
          />
        </Box>
      </Box>
      {data.validated && <DoneAll color="success" />}
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
