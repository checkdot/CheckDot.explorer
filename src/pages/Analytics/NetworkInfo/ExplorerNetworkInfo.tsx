import React, {createContext} from "react";
import Grid from "@mui/material/Grid";
import TotalSupply from "./TotalSupply";
import TotalTransactions from "./TotalTransactions";
import {Link} from "../../../routing";
import {useQuery} from "@tanstack/react-query";
import {api_getAnalytics} from "../../../queries/api";
import {useNetworkSelector} from "../../../global-config/network-selection";
import LatestBlock from "./LatestBlock";
import Marketcap from "./Marketcap";
import DailyUserTransactionsChart from "../Charts/DailyUserTransactionsChart";
import moment from "moment";

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

  const allAnalyticsQuery = useQuery({
    queryKey: ["get_Analytics"],
    queryFn: async () => {
      const result = await api_getAnalytics(selectedNetwork);

      if (Object.keys(result).length === 0) {
        return undefined;
      }
      return result.result;
    },
  });

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
              <Marketcap data={analyticsQuery.data} />
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
              allAnalyticsQuery?.data?.daily_user_transactions ??
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
