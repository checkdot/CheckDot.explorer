import * as React from "react";
import LineChart from "../Components/LineChart";
import {getLabels} from "../utils";
import {ChartRangeDays} from "../Components/ChartRangeDaysSelect";
import ChartTitle from "../Components/ChartTitle";
import {Card} from "../../../components/Card";

export function getDataset(data: any[], days: number): number[] {
  return data
    .slice(-days)
    .map((dailyData) => Number(dailyData.avg_gas_unit_price));
}

type DailyAvgGasUnitPriceChartProps = {
  data: any[];
  days: ChartRangeDays;
};

export default function DailyAvgGasUnitPriceChart({
  data,
  days,
}: DailyAvgGasUnitPriceChartProps) {
  const labels = getLabels(data, days);
  const dataset = getDataset(data, days);

  return (
    <Card>
      <ChartTitle
        label="Average Gas Unit Price"
        tooltip="Daily average gas unit price on user transactions."
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
