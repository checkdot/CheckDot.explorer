import React from "react";
import MetricCard from "./MetricCard";
import { ethers } from "ethers";
import { numberWithCommas } from "../utils";

export default function TotalSupply({ data }: any) {
  return (
    <MetricCard
      data={`${data?.totalSupply ? numberWithCommas(data.totalSupply) : '...'} CDT`}
      label="Total Supply"
      tooltip="Total Supply"
    />
  );
}
