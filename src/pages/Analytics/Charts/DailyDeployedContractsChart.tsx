import * as React from "react";
import BarChart from "../Components/BarChart";
import {getLabels} from "../utils";
import {ChartRangeDays} from "../Components/ChartRangeDaysSelect";
import ChartTitle from "../Components/ChartTitle";
import {Card} from "../../../components/Card";

function getDataset(data: any[], days: number): number[] {
  return data
    .slice(-days)
    .map((dailyData) => dailyData.daily_contract_deployed);
}

type DailyDeployedContractsChartProps = {
  data: any[];
  days: ChartRangeDays;
};

export default function DailyDeployedContractsChart({
  data,
  days,
}: DailyDeployedContractsChartProps) {
  const labels = getLabels(data, days);
  const dataset = getDataset(data, days);

  return (
    <Card>
      <ChartTitle
        label="Deployed Contracts"
        tooltip="Daily count of move modules."
      />
      <BarChart labels={labels} dataset={dataset} />
    </Card>
  );
}
