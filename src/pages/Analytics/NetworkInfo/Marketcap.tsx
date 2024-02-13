import React from "react";
import MetricCard from "./MetricCard";
import {numberWithCommas} from "../utils";

export default function Marketcap({data}: any) {
  return (
    <MetricCard
      data={`$${data?.marketcap !== undefined ? numberWithCommas(data.marketcap) : "..."}`}
      label="Market Cap"
      tooltip="Market Cap"
    />
  );
}
