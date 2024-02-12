import React from "react";
import MetricCard, { DoubleMetricCard } from "./MetricCard";
import { numberWithCommas } from "../utils";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";

const momentLatestBlockDisplay = (data: any) => {
  if (data?.latestBlockTime === undefined) {
    return '...';
  }
  const latestBlock = moment(Number(data.latestBlockTime) * 1000);
  const minutesRemaining = latestBlock.diff(moment(), 'minutes');
  const secondsRemaining = latestBlock.diff(moment(), 'seconds') - (minutesRemaining * 60);

  return `${-minutesRemaining} min(s) ${-secondsRemaining} sec(s) ago`;
}

const momentNextBlockDisplay = (data: any) => {
  if (data?.latestBlockTime === undefined) {
    return '...';
  }
  const nextBlock = moment(Number(data.latestBlockTime) * 1000).add(10, 'minutes');
  const minutesRemaining = nextBlock.diff(moment(), 'minutes');
  const secondsRemaining = nextBlock.diff(moment(), 'seconds') - (minutesRemaining * 60);

  return `in ${minutesRemaining} min(s) ${secondsRemaining} sec(s)`;
}

export default function LatestBlock({ data }: any) {

  const intervalLatestBlockDisplay = useQuery({
    queryKey: ['IntervalLatestBlockDisplay'],
    queryFn: () => {
      return momentLatestBlockDisplay(data);
    },
    refetchInterval: 1000
  });

  const intervalNextBlockDisplay = useQuery({
    queryKey: ['IntervalNextBlockDisplay'],
    queryFn: () => {
      return momentNextBlockDisplay(data);
    },
    refetchInterval: 1000
  });

  return (
    <DoubleMetricCard
      data1={`${data?.latestBlockNumber !== undefined ? numberWithCommas(data.latestBlockNumber) : '...'}`}
      data2={`Next`}
      label1={intervalLatestBlockDisplay?.data ?? '...'}
      label2={intervalNextBlockDisplay?.data ?? '...'}
      cardLabel="Latest Block Number"
      tooltip={"Latest Block Number"}
    />
  );
}
