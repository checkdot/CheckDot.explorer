import * as React from "react";
import BarChart from "../Components/BarChart";
import {getLabels} from "../utils";
import {ChartRangeDays} from "../Components/ChartRangeDaysSelect";
import ChartTitle from "../Components/ChartTitle";
import {Card} from "../../../components/Card";

function getDataset(data: any[], days: number): number[] {
  return data
    .slice(-days)
    .map((dailyData) => dailyData.daily_active_user_count);
}

type DailyActiveUserChartProps = {
  data: any[];
  days: ChartRangeDays;
};

export default function DailyActiveUserChart({
  data,
  days,
}: DailyActiveUserChartProps) {
  const labels = getLabels(data, days);
  const dataset = getDataset(data, days);

  return (
    <Card>
      <ChartTitle
        label="Daily Active Accounts"
        tooltip="Daily count of distinct addresses with signed transactions."
      />
      <BarChart labels={labels} dataset={dataset} />
    </Card>
  );
}
