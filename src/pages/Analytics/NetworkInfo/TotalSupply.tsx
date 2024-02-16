import React from "react";
import MetricCard from "./MetricCard";
import { ethers } from "ethers";
import { numberWithCommas } from "../utils";

export default function TotalSupply({ data }: any) {
  return (
    <MetricCard
      data={`${data?.totalSupply ? numberWithCommas(Number(data.totalSupply).toFixed(0)) : '...'} CDT`}
      label="Total Supply"
      tooltip="Total Supply"
    />
  );
}
