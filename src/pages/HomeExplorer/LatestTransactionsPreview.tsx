import {Stack, Typography, Box} from "@mui/material";
import LatestBlocksTable from "../Blocks/LatestBlocks";
import {LatestUserTransactionsTable} from "../Transactions/LatestTransactionsTable";
import {useNetworkSelector} from "../../global-config/network-selection";
import {useQuery} from "@tanstack/react-query";
import {api_getLatestTransactions} from "../../queries/api";
import {buildTransactionFromQueryResult} from "../utils";
import {Link} from "../../routing";
import {useTheme} from "@mui/system";
import {grey} from "../../themes/colors/colorPalette";
import {ChevronRight} from "@mui/icons-material";

export default function LatestTransactionsPreview() {
  const theme = useTheme();
  const [selectedNetwork] = useNetworkSelector();

  const lastTransactions = useQuery({
    queryKey: ["api_getLatestTransactions"],
    queryFn: async () => {
      const queryResult = await api_getLatestTransactions(selectedNetwork);
      return queryResult.result
        .slice(0, 6)
        .map((x: any) => buildTransactionFromQueryResult(x));
    },
    refetchInterval: 10000,
  });

  return (
    <>
      <Stack spacing={0.5}>
        <Typography variant="h5">Latest Transactions</Typography>
        <Box sx={{overflowX: "auto", width: "auto"}}>
          {lastTransactions.data && (
            <LatestUserTransactionsTable transactions={lastTransactions.data} />
          )}
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
          View All Transactions
          <ChevronRight />
        </Link>
      </Stack>
    </>
  );
}
