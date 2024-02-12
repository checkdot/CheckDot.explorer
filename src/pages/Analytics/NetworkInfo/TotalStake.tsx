import React from "react";
import MetricCard from "./MetricCard";
import { numberWithCommas } from "../utils";

export default function TotalStake({ data }: any) {
  return (
    <MetricCard
      data={`${data?.activelyStaked !== undefined ? numberWithCommas(data.activelyStaked) : '...'} CDT`}
      label="Actively Staked"
      tooltip="Actively Staked"
    />
  );
}
