import React, {useState} from "react";
import {Grid} from "@mui/material";
import ChartRangeDaysSelect, {
  ChartRangeDays,
} from "./Components/ChartRangeDaysSelect";
import DailyActiveUserChart from "./Charts/DailyActiveUserChart";
import DailyAvgGasUnitPriceChart from "./Charts/DailyAvgGasUnitPriceChart";
import DailyDeployedScriptsChart from "./Charts/DailyDeployedScriptsChart";
import DailyPeakTPSChart from "./Charts/DailyPeakTPSChart";
import DailyNewAccountsCreatedChart from "./Charts/DailyNewAccountsCreatedChart";
import DailyUserTransactionsChart from "./Charts/DailyUserTransactionsChart";
import NetworkInfo from "./NetworkInfo/NetworkInfo";
import DailyGasConsumptionChart from "./Charts/DailyGasConsumptionChart";
import MonthlyActiveUserChart from "./Charts/MonthlyActiveUserChart";
import moment from "moment";

export default function MainnetAnalytics() {
  const [days, setDays] = useState<ChartRangeDays>(
    ChartRangeDays.DEFAULT_RANGE,
  );

  const data: any = {
    max_tps_15_blocks_in_past_30_days: [
      {
        max_tps_15_blocks_in_past_30_days: 323,
      },
    ],
    daily_max_tps_15_blocks: [
      ... [...Array(30).keys()].reverse().map(x => {
        return { max_tps_15_blocks: 0, date: moment().subtract(x, 'days').format("YYYY-MM-DD") };
      })
    ],
    daily_user_transactions: [
      ... [...Array(30).keys()].reverse().map(x => {
        return { num_user_transactions: 0, date: moment().subtract(x, 'days').format("YYYY-MM-DD") };
      })
    ],
    daily_average_gas_unit_price: [
      ... [...Array(30).keys()].reverse().map(x => {
        return { avg_gas_unit_price: 1, date: moment().subtract(x, 'days').format("YYYY-MM-DD") };
      })
    ],
    daily_gas_from_user_transactions: [
      ... [...Array(30).keys()].reverse().map(x => {
        return { gas_cost: 1, date: moment().subtract(x, 'days').format("YYYY-MM-DD") };
      })
    ],
    daily_deployed_scripts: [
      ... [...Array(30).keys()].reverse().map(x => {
        return { daily_scripts_deployed: 0, date: moment().subtract(x, 'days').format("YYYY-MM-DD") };
      })
    ],
    daily_new_accounts_created: [
      ... [...Array(30).keys()].reverse().map(x => {
        return { daily_new_accounts_created: 1, date: moment().subtract(x, 'days').format("YYYY-MM-DD") };
      })
    ],
    daily_active_users: [
      ... [...Array(30).keys()].reverse().map(x => {
        return { daily_active_user_count: 1, date: moment().subtract(x, 'days').format("YYYY-MM-DD") };
      })
    ],
    mau_signers: [
      ... [...Array(30).keys()].reverse().map(x => {
        return { mau_signer_30: 0, date: moment().subtract(x, 'months').format("YYYY-MM-DD") };
      })
    ],
  };

  if (!data) {
    // TODO: apply better error message
    return null;
  }

  return (
    <Grid container spacing={3} marginTop={3}>
      <Grid item xs={12} md={12} lg={12} marginBottom={2}>
        <NetworkInfo />
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <ChartRangeDaysSelect days={days} setDays={setDays} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyUserTransactionsChart
          data={data.daily_user_transactions}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyPeakTPSChart data={data.daily_max_tps_15_blocks} days={days} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <MonthlyActiveUserChart data={data.mau_signers} days={days} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyActiveUserChart data={data.daily_active_users} days={days} />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyNewAccountsCreatedChart
          data={data.daily_new_accounts_created}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyDeployedScriptsChart
          data={data.daily_deployed_scripts}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyGasConsumptionChart
          data={data.daily_gas_from_user_transactions}
          days={days}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <DailyAvgGasUnitPriceChart
          data={data.daily_average_gas_unit_price}
          days={days}
        />
      </Grid>
    </Grid>
  );
}
