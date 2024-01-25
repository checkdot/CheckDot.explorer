import * as React from "react";
import LineChart from "../Components/LineChart";
import {getLabels} from "../utils";
import {ChartRangeDays} from "../Components/ChartRangeDaysSelect";
import ChartTitle from "../Components/ChartTitle";
import {Card} from "../../../components/Card";

export function getDataset(data: any[], days: number): number[] {
  return data.slice(-days).map((dailyData) => Number(dailyData.gas_cost));
}

type DailyGasConsumptionChartProps = {
  data: any[];
  days: ChartRangeDays;
};

export default function DailyGasConsumptionChart({
  data,
  days,
}: DailyGasConsumptionChartProps) {
  const labels = getLabels(data, days);
  const dataset = getDataset(data, days);
  return (
    <Card>
      <ChartTitle
        label="Gas Consumption"
        tooltip="Daily gas on user transactions."
      />
      <LineChart
        labels={labels}
        dataset={dataset}
        fill
        tooltipsLabelFunc={(context: any) => {
          const priceInteger = Math.round(context.parsed.y).toString();
          const priceInCDT = priceInteger;
          return `${priceInCDT} CDT`;
        }}
      />
    </Card>
  );
}
