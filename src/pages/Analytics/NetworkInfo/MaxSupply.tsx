import React from "react";
import MetricCard from "./MetricCard";

export default function MaxSupply({ data }: any) {
  return (
    <MetricCard
      data={"21,000,000 CDT"}
      label="Max Supply"
      tooltip="Max Supply"
    />
  );
}
