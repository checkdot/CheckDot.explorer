import * as React from "react";
import {getLabels} from "../utils";
import {ChartRangeDays} from "../Components/ChartRangeDaysSelect";
import ChartTitle from "../Components/ChartTitle";
import {Card} from "../../../components/Card";
import LineChart from "../Components/LineChart";

function getDataset(data: any[], days: number): number[] {
  return data.slice(-days).map((dailyData) => dailyData.mau_signer_30);
}

type MonthlyActiveUserChartProps = {
  data: any[];
  days: ChartRangeDays;
};

export default function MonthlyActiveUserChart({
  data,
  days,
}: MonthlyActiveUserChartProps) {
  const labels = getLabels(data, days);
  const dataset = getDataset(data, days);

  return (
    <Card>
      <ChartTitle
        label="Monthly Active Accounts"
        tooltip="Daily count of distinct addresses with signed transactions over the last 30 days."
      />
      <LineChart labels={labels} dataset={dataset} decimals={1} />
    </Card>
  );
}
