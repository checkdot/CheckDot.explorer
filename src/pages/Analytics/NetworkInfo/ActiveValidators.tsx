import React from "react";
import MetricCard from "./MetricCard";
import { numberWithCommas } from "../utils";

export default function ActiveValidators({ data }: any) {
  return (
    <MetricCard
      data={data?.activeValidators !== undefined ? numberWithCommas(data.activeValidators) : '...'}
      label="Active Validators"
      tooltip="Active Validators"
    />
  );
}
