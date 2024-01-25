import React from "react";
import MetricCard from "./MetricCard";

export default function ActiveValidators() {
  return (
    <MetricCard
      data={"125"}
      label="Active Validators"
      tooltip="Active Validators"
    />
  );
}
