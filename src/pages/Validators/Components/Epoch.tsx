import React, {useEffect, useState} from "react";
import MetricSection from "./MetricSection";
import Subtitle from "./Text/Subtitle";
import Body from "./Text/Body";
import moment from "moment";
import {parseTimestamp} from "../../utils";
import {Stack, Skeleton} from "@mui/material";
import {StyledLearnMoreTooltip} from "../../../components/StyledTooltip";
import IntervalBar, {IntervalType} from "../../../components/IntervalBar";

const EPOCH_TOOLTIP_TEXT =
  "An epoch in the CheckDot blockchain is defined as a duration of time, in seconds, during which a number of blocks are voted on by the validators. The CheckDot mainnet epoch is set as 3600 seconds (one hour).";
const EPOCH_LEARN_MORE_LINK = "https://checkdot.io";

type EpochProps = {
  isSkeletonLoading: boolean;
};

export default function Epoch({isSkeletonLoading}: EpochProps) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [percentageComplete, setPercentageComplete] = useState<number>(0);

  const curEpoch = 5648;
  const lastEpochTime = '1706124685768210';
  const epochInterval = '3600000000';

  useEffect(() => {
    if (lastEpochTime !== undefined && epochInterval !== undefined) {
      const epochIntervalSeconds = parseInt(epochInterval) / 1000;
      const startTimestamp = parseTimestamp(lastEpochTime);
      const nowTimestamp = parseTimestamp(moment.now().toString());
      const timePassed = moment.duration(nowTimestamp.diff(startTimestamp));
      const timeRemaining = epochIntervalSeconds - timePassed.asMilliseconds();
      setTimeRemaining(timeRemaining);
      setPercentageComplete(
        parseInt(
          ((timePassed.asMilliseconds() * 100) / epochIntervalSeconds).toFixed(
            0,
          ),
        ),
      );
    }
  }, [curEpoch, lastEpochTime, epochInterval]);
  return !isSkeletonLoading ? (
    <MetricSection>
      <Stack direction="row" spacing={1} alignItems="center">
        <Subtitle>{`Epoch ${curEpoch}`}</Subtitle>
        <StyledLearnMoreTooltip
          text={EPOCH_TOOLTIP_TEXT}
          link={EPOCH_LEARN_MORE_LINK}
        />
      </Stack>
      <Body>{`${percentageComplete}% complete`}</Body>
      <IntervalBar
        percentage={percentageComplete}
        timestamp={Date.now() + timeRemaining}
        intervalType={IntervalType.EPOCH}
      />
    </MetricSection>
  ) : (
    <MetricSection>
      <Stack direction="row" spacing={1} alignItems="center">
        <Skeleton width={140} />
      </Stack>
      <Skeleton width={180} />
      <Skeleton width={180} />
    </MetricSection>
  );
}
