import React from "react";
import MetricCard from "./MetricCard";

export default function TotalSupply() {
  return (
    <MetricCard
      data={"1,077,385,743"}
      label="Total Supply"
      tooltip="Total Supplys"
    />
  );
}
