import Grid from "@mui/material/Grid";
import {useQuery} from "@tanstack/react-query";
import {BigNumber, ethers} from "ethers";
import moment from "moment";
import React, {createContext} from "react";
import {useNetworkSelector} from "../../../global-config/network-selection";
import {api_getAnalytics, api_getLatestBlocks} from "../../../queries/api";
import {Link} from "../../../routing";
import {buildBlockFromQueryResult} from "../../utils";
import DailyUserTransactionsChart from "../Charts/DailyUserTransactionsChart";
import Canvas3D from "./Canvas3D";
import LatestBlock from "./LatestBlock";
import TotalSupply from "./TotalSupply";
import TotalTransactions from "./TotalTransactions";

type CardStyle = "default" | "outline";

export const StyleContext = createContext<CardStyle>("default");

function LinkableContainer({
  linkToAnalyticsPage,
  children,
  link = "/analytics",
}: {
  linkToAnalyticsPage: boolean;
  children: React.ReactNode;
  link?: string;
}) {
  return linkToAnalyticsPage ? (
    <Link to={link} underline="none" color="inherit" variant="inherit">
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
}

export default function ExplorerNetworkInfo() {
  const [selectedNetwork] = useNetworkSelector();
  const [blockSizes, setBlockSizes] = React.useState<number[]>([]);

  const analyticsQuery = useQuery({
    queryKey: ["api_getAnalytics"],
    queryFn: async () => {
      const queryResult = await api_getAnalytics(selectedNetwork);
      return queryResult.result;
    },
    refetchInterval: 10000,
  });

  const lastBlocks = useQuery({
    queryKey: ["api_getLatestBlocks"],
    queryFn: async () => {
      const queryResult = await api_getLatestBlocks(selectedNetwork, 1, 6);
      return queryResult.result.map((x: any) => {
        const block = buildBlockFromQueryResult(x, true);

        return {
          block_height: block.block_height,
          block_timestamp: block.timestamp,
          hash: block.hash,
          size:
            Number(
              block.gasUsed
                .mul(BigNumber.from(100))
                .div(block.gasLimit)
                .toString(),
            ) / 100,
          txns: x.transactions.length,
          reward: ethers.utils.formatEther(block.staticReward),
        };
      });
    },
    refetchInterval: 10000,
  });

  const defaultData: any = {
    daily_user_transactions: analyticsQuery.data?.daily_user_transactions ?? [],
  };

  return (
    <StyleContext.Provider value={"default"}>
      <Grid
        container
        direction="row"
        sx={{alignContent: "flex-start"}}
        marginBottom={6}
        spacing={3}
      >
        <Grid container item xs={12} md={12} lg={8} spacing={3}>
          <Grid item xs={12} md={6}>
            <LinkableContainer linkToAnalyticsPage>
              <TotalSupply data={analyticsQuery.data} />
            </LinkableContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <LinkableContainer linkToAnalyticsPage>
              <TotalTransactions data={analyticsQuery.data} card />
            </LinkableContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <LinkableContainer linkToAnalyticsPage>
              {lastBlocks.data && lastBlocks.data.length > 3 && (
                <Canvas3D
                  cube1={lastBlocks.data[2].size}
                  cube2={lastBlocks.data[1].size}
                  cube3={lastBlocks.data[0].size}
                />
              )}
            </LinkableContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <LinkableContainer
              linkToAnalyticsPage
              link={`/block/${analyticsQuery.data?.latestBlockNumber}`}
            >
              <LatestBlock data={analyticsQuery.data} />
            </LinkableContainer>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <DailyUserTransactionsChart
            data={
              analyticsQuery?.data?.daily_user_transactions ??
              defaultData.daily_user_transactions
            }
            days={7}
            label="Transaction History In 7 Days"
            tooltip="Weekly transaction count of user transactions."
            cardProps={{height: "100%"}}
            chartProps={{height: "190px"}}
          />
        </Grid>
      </Grid>
    </StyleContext.Provider>
  );
}
