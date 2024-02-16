import {Grid} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import moment from "moment";
import {useState} from "react";
import {useNetworkSelector} from "../../global-config/network-selection";
import {api_getAnalytics} from "../../queries/api";
import DailyActiveUserChart from "./Charts/DailyActiveUserChart";
import DailyAvgGasUnitPriceChart from "./Charts/DailyAvgGasUnitPriceChart";
import DailyDeployedScriptsChart from "./Charts/DailyDeployedScriptsChart";
import DailyGasConsumptionChart from "./Charts/DailyGasConsumptionChart";
import DailyNewAccountsCreatedChart from "./Charts/DailyNewAccountsCreatedChart";
import DailyPeakTPSChart from "./Charts/DailyPeakTPSChart";
import DailyUserTransactionsChart from "./Charts/DailyUserTransactionsChart";
import ChartRangeDaysSelect, {
  ChartRangeDays,
} from "./Components/ChartRangeDaysSelect";
import NetworkInfo from "./NetworkInfo/NetworkInfo";

export default function MainnetAnalytics() {
  const [days, setDays] = useState<ChartRangeDays>(
    ChartRangeDays.DEFAULT_RANGE,
  );

  const [selectedNetwork] = useNetworkSelector();
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
    daily_tps: [
      ...[...Array(30).keys()].reverse().map((x) => {
        return {
          tps: 0,
          date: moment().subtract(x, "days").format("YYYY-MM-DD"),
        };
      }),
    ],
    daily_user_transactions: [
      ...[...Array(30).keys()].reverse().map((x) => {
        return {
          num_user_transactions: 0,
          date: moment().subtract(x, "days").format("YYYY-MM-DD"),
        };
      }),
    ],
    daily_average_gas_unit_price: [
      ...[...Array(30).keys()].reverse().map((x) => {
        return {
          avg_gas_unit_price: 1,
          date: moment().subtract(x, "days").format("YYYY-MM-DD"),
        };
      }),
    ],
    daily_gas_from_user_transactions: [
      ...[...Array(30).keys()].reverse().map((x) => {
        return {
          gas_cost: 1,
          date: moment().subtract(x, "days").format("YYYY-MM-DD"),
        };
      }),
    ],
    daily_deployed_scripts: [
      ...[...Array(30).keys()].reverse().map((x) => {
        return {
          daily_scripts_deployed: 0,
          date: moment().subtract(x, "days").format("YYYY-MM-DD"),
        };
      }),
    ],
    daily_new_accounts_created: [
      ...[...Array(30).keys()].reverse().map((x) => {
        return {
          daily_new_accounts_created: 1,
          date: moment().subtract(x, "days").format("YYYY-MM-DD"),
        };
      }),
    ],
    daily_active_users: [
      ...[...Array(30).keys()].reverse().map((x) => {
        return {
          daily_active_user_count: 1,
          date: moment().subtract(x, "days").format("YYYY-MM-DD"),
        };
      }),
    ],
  };

  return (
    <Grid container spacing={3} marginTop={3}>
      <Grid item xs={12} md={12} lg={12} marginBottom={2}>
        <NetworkInfo isOnHomePage={false} data={allAnalyticsQuery} />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <ChartRangeDaysSelect days={days} setDays={setDays} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyUserTransactionsChart
          data={
            allAnalyticsQuery?.data?.daily_user_transactions ??
            defaultData.daily_user_transactions
          }
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyPeakTPSChart
          data={allAnalyticsQuery?.data?.daily_tps ?? defaultData.daily_tps}
          days={days}
        />
      </Grid>
      {/* <Grid item xs={12} md={6} lg={3}>
        <MonthlyActiveUserChart data={allAnalyticsQuery?.data?.mau_signers ?? defaultData.mau_signers} days={days} />
      </Grid> */}
      <Grid item xs={12} md={6} lg={3}>
        <DailyActiveUserChart
          data={
            allAnalyticsQuery?.data?.daily_active_users ??
            defaultData.daily_active_users
          }
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyNewAccountsCreatedChart
          data={
            allAnalyticsQuery?.data?.daily_new_accounts_created ??
            defaultData.daily_new_accounts_created
          }
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyDeployedScriptsChart
          data={
            allAnalyticsQuery?.data?.daily_deployed_scripts ??
            defaultData.daily_deployed_scripts
          }
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyGasConsumptionChart
          data={
            allAnalyticsQuery?.data?.daily_gas_from_user_transactions ??
            defaultData.daily_gas_from_user_transactions
          }
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyAvgGasUnitPriceChart
          data={
            allAnalyticsQuery?.data?.daily_average_gas_unit_price ??
            defaultData.daily_average_gas_unit_price
          }
          days={days}
        />
      </Grid>
    </Grid>
  );
}
