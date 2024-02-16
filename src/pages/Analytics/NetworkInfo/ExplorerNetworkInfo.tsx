import React, {createContext} from "react";
import Grid from "@mui/material/Grid";
import TotalSupply from "./TotalSupply";
import TotalTransactions from "./TotalTransactions";
import {Link} from "../../../routing";
import {useQuery} from "@tanstack/react-query";
import {api_getAnalytics, api_getLatestBlocks} from "../../../queries/api";
import {useNetworkSelector} from "../../../global-config/network-selection";
import LatestBlock from "./LatestBlock";
import Marketcap from "./Marketcap";
import DailyUserTransactionsChart from "../Charts/DailyUserTransactionsChart";
import moment from "moment";
import Canvas3D from "./Canvas3D";
import { buildBlockFromQueryResult } from "../../utils";
import { BigNumber, ethers } from "ethers";

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

  // const allAnalyticsQuery = useQuery({
  //   queryKey: ["get_Analytics"],
  //   queryFn: async () => {
  //     const result = await api_getAnalytics(selectedNetwork);

  //     if (Object.keys(result).length === 0) {
  //       return undefined;
  //     }
  //     return result.result;
  //   },
  // });

  const defaultData: any = {
    daily_user_transactions: [
      ...[...Array(30).keys()].reverse().map((x) => {
        return {
          num_user_transactions: 0,
          date: moment().subtract(x, "days").format("YYYY-MM-DD"),
        };
      }),
    ],
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
              { lastBlocks.data && lastBlocks.data.length > 3 && (
                <Canvas3D cube1={lastBlocks.data[lastBlocks.data.length - 3].size} cube2={lastBlocks.data[lastBlocks.data.length - 2].size} cube3={lastBlocks.data[lastBlocks.data.length - 1].size} />
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
