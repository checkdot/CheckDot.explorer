import {Stack, Typography, Box} from "@mui/material";
import LatestBlocksTable from "../Blocks/LatestBlocks";
import {Link} from "../../routing";
import {useTheme} from "@mui/system";
import {grey} from "../../themes/colors/colorPalette";
import {ChevronRight} from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";
import { useNetworkSelector } from "../../global-config/network-selection";
import { api_getLatestBlocks } from "../../queries/api";
import { buildBlockFromQueryResult } from "../utils";
import { BigNumber, ethers } from "ethers";

export default function LatestBlocksPreview() {
  const theme = useTheme();
  const [selectedNetwork] = useNetworkSelector();

  const lastBlocks = useQuery({
    queryKey: ["api_getLatestBlocks"],
    queryFn: async () => {
      const queryResult = await api_getLatestBlocks(selectedNetwork);
      return queryResult.result
        .map((x: any) => {
          let block = buildBlockFromQueryResult(x, true);

          return {
            block_height: block.block_height,
            block_timestamp: block.timestamp,
            hash: block.hash,
            size: Number(block.gasUsed.mul(BigNumber.from(100)).div(block.gasLimit).toString()) / 100,
            txns: x.transactions.length,
            reward: ethers.utils.formatEther(block.staticReward),
          }
        });
    },
    refetchInterval: 10000,
  });

  return (
    <>
      <Stack spacing={0.5}>
        <Typography variant="h5">Latest Blocks</Typography>
        <Box sx={{overflowX: "auto", width: "auto"}}>
          { lastBlocks.data && <LatestBlocksTable blocks={lastBlocks.data} /> }
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
          View All Blocks (Comming Soon!)
          <ChevronRight />
        </Link>
      </Stack>
    </>
  );
}
