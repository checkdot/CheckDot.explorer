import {Stack, Typography, Box} from "@mui/material";
import LatestBlocksTable from "../Blocks/LatestBlocks";
import {Link} from "../../routing";
import {useTheme} from "@mui/system";
import {grey} from "../../themes/colors/colorPalette";
import {ChevronRight} from "@mui/icons-material";

export default function LatestBlocksPreview() {
  const theme = useTheme();
  const recentBlocks = [
    {
      block_height: 526,
      block_timestamp: 1707803851600,
      hash: "0xf1fecfd19d939e6af2ad6dd2e3d618e38f733fd0ed3a21bf8e79fc967ab250ac",
      txns: 10,
      reward: 0.0023,
    },
    {
      block_height: 525,
      block_timestamp: 1707803841580,
      hash: "0xf1fecfd19d939e6af2ad6dd2e3d618e38f733fd0ed3a21bf8e79fc967ab250ac",
      txns: 10,
      reward: 0.0023,
    },
    {
      block_height: 524,
      block_timestamp: 1707803831560,
      hash: "0xf1fecfd19d939e6af2ad6dd2e3d618e38f733fd0ed3a21bf8e79fc967ab250ac",
      txns: 10,
      reward: 0.0023,
    },
    {
      block_height: 523,
      block_timestamp: 1707803821540,
      hash: "0xf1fecfd19d939e6af2ad6dd2e3d618e38f733fd0ed3a21bf8e79fc967ab250ac",
      txns: 10,
      reward: 0.0023,
    },
    {
      block_height: 523,
      block_timestamp: 1707803821540,
      hash: "0xf1fecfd19d939e6af2ad6dd2e3d618e38f733fd0ed3a21bf8e79fc967ab250ac",
      txns: 10,
      reward: 0.0023,
    },
    {
      block_height: 523,
      block_timestamp: 1707803821540,
      hash: "0xf1fecfd19d939e6af2ad6dd2e3d618e38f733fd0ed3a21bf8e79fc967ab250ac",
      txns: 10,
      reward: 0.0023,
    },
  ];

  return (
    <>
      <Stack spacing={0.5}>
        <Typography variant="h5">Latest Blocks</Typography>
        <Box sx={{overflowX: "auto", width: "auto"}}>
          <LatestBlocksTable blocks={recentBlocks} />
        </Box>
        <Link
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            userSelect: "none",
            backgroundColor: `${
              theme.palette.mode === "dark" ? grey[800] : grey[50]
            }`,
            textDecoration: "none",
            fontSize: 14,
            paddingY: 2,
            borderRadius: "12px",
            color: `${theme.palette.mode === "dark" ? grey[100] : grey[900]}`,
            "&:hover:not(:active)": {
              filter: `${
                theme.palette.mode === "dark"
                  ? "brightness(0.9)"
                  : "brightness(0.99)"
              }`,
            },
            "&:active": {
              background: theme.palette.neutralShade.main,
              transform: "translate(0,0.1rem)",
            },
          }}
        >
          View All Blocks
          <ChevronRight />
        </Link>
      </Stack>
    </>
  );
}
