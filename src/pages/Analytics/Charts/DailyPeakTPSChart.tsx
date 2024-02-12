import * as React from "react";
import LineChart from "../Components/LineChart";
import {getLabels} from "../utils";
import {ChartRangeDays} from "../Components/ChartRangeDaysSelect";
import ChartTitle from "../Components/ChartTitle";
import {Card} from "../../../components/Card";

export function getDataset(data: any[], days: number): number[] {
  return data.slice(-days).map((dailyData) => dailyData.tps);
}

type DailyPeakTPSChartProps = {
  data: any[];
  days: ChartRangeDays;
};

export default function DailyPeakTPSChart({
  data,
  days,
}: DailyPeakTPSChartProps) {
  const labels = getLabels(data, days);
  const dataset = getDataset(data, days);

  return (
    <Card>
      <ChartTitle
        label="TPS"
        tooltip="Daily rate of transactions per second"
      />
      <LineChart labels={labels} dataset={dataset} tooltipsLabelFunc={(context: any) => {
          return `${context.parsed.y.toFixed(5)} TPS`;
        }} />
    </Card>
  );
}
