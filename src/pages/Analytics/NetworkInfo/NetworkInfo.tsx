import React, {createContext} from "react";
import Grid from "@mui/material/Grid";
import TotalSupply from "./TotalSupply";
import TotalStake from "./TotalStake";
import TPS from "./TPS";
import ActiveValidators from "./ActiveValidators";
import TotalTransactions from "./TotalTransactions";
import {Link} from "../../../routing";
import MaxSupply from "./MaxSupply";
import { useQuery } from "@tanstack/react-query";
import { api_getAnalytics } from "../../../queries/api";
import { useNetworkSelector } from "../../../global-config/network-selection";
import { buildBlockFromQueryResult } from "../../utils";
import LatestBlock from "./LatestBlock";

type CardStyle = "default" | "outline";

export const StyleContext = createContext<CardStyle>("default");

function LinkableContainer({
  linkToAnalyticsPage,
  children,
  link = '/analytics'
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

type NetworkInfoProps = {
  isOnHomePage?: boolean;
  data?: any;
};

export default function NetworkInfo({isOnHomePage, data}: NetworkInfoProps) {
  const onHomePage = isOnHomePage === true;
  const [selectedNetwork,] = useNetworkSelector();
  const analyticsQuery = onHomePage ? useQuery({
    queryKey: ['api_getAnalytics'],
    queryFn: async () => {
      const queryResult = await api_getAnalytics(selectedNetwork);
      return queryResult.result;
    },
    refetchInterval: 10000,
    enabled: onHomePage
  }) : data;

  return (
    <StyleContext.Provider value={"default"}>
      <Grid
        container
        spacing={3}
        direction="row"
        sx={{alignContent: "flex-start"}}
        marginBottom={onHomePage ? 6 : 0}
      >
        {onHomePage && (
          <Grid item xs={12} md={12} lg={12}>
            { analyticsQuery.data && (<TotalTransactions data={analyticsQuery.data} />) }
          </Grid>
        )}
        <Grid item xs={12} md={6} lg={3}>
          <LinkableContainer linkToAnalyticsPage={onHomePage}>
          <TotalSupply data={analyticsQuery.data} />
          </LinkableContainer>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <LinkableContainer linkToAnalyticsPage={onHomePage} link={`/block/${analyticsQuery.data?.latestBlockNumber}`}>
            {/* <TotalStake data={analyticsQuery.data} /> */}
            <LatestBlock data={analyticsQuery.data} />
          </LinkableContainer>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <LinkableContainer linkToAnalyticsPage={onHomePage}>
            <MaxSupply />
          </LinkableContainer>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <LinkableContainer linkToAnalyticsPage={onHomePage}>
            <ActiveValidators data={analyticsQuery.data} />
          </LinkableContainer>
        </Grid>
      </Grid>
    </StyleContext.Provider>
  );
}
