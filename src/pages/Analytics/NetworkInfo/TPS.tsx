import {DoubleMetricCard} from "./MetricCard";

export default function TPS() {
  return (
    <DoubleMetricCard
      data1={"16"}
      data2={"323"}
      label1="REAL-TIME"
      label2="PEAK LAST 30 DAYS"
      cardLabel="TPS"
      tooltip={"TPS"}
    />
  );
}
