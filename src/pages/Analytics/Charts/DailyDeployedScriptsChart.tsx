import * as React from "react";
import BarChart from "../Components/BarChart";
import {getLabels} from "../utils";
import {ChartRangeDays} from "../Components/ChartRangeDaysSelect";
import ChartTitle from "../Components/ChartTitle";
import {Card} from "../../../components/Card";

function getDataset(data: any[], days: number): number[] {
  return data
    .slice(-days)
    .map((dailyData) => dailyData.daily_scripts_deployed);
}

type DailyDeployedScriptsChartProps = {
  data: any[];
  days: ChartRangeDays;
};

export default function DailyDeployedScriptsChart({
  data,
  days,
}: DailyDeployedScriptsChartProps) {
  const labels = getLabels(data, days);
  const dataset = getDataset(data, days);

  return (
    <Card>
      <ChartTitle
        label="Deployed Scripts"
        tooltip="Daily count of scripts creation."
      />
      <BarChart labels={labels} dataset={dataset} />
    </Card>
  );
}
