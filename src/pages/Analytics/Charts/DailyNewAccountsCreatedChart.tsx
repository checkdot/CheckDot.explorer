import * as React from "react";
import BarChart from "../Components/BarChart";
import {getLabels} from "../utils";
import {ChartRangeDays} from "../Components/ChartRangeDaysSelect";
import ChartTitle from "../Components/ChartTitle";
import {Card} from "../../../components/Card";

function getDataset(data: any[], days: number): number[] {
  return data.slice(-days).map((dailyData) => dailyData.new_account_count);
}

type DailyNewAccountsCreatedChartProps = {
  data: any[];
  days: ChartRangeDays;
};

export default function DailyNewAccountsCreatedChart({
  data,
  days,
}: DailyNewAccountsCreatedChartProps) {
  const labels = getLabels(data, days);
  const dataset = getDataset(data, days);

  return (
    <Card>
      <ChartTitle
        label="New Accounts Created"
        tooltip="Daily instances of distinct addresses getting coin balance for the first time."
      />
      <BarChart labels={labels} dataset={dataset} />
    </Card>
  );
}
