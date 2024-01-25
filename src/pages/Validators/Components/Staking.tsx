import React from "react";
import MetricSection from "./MetricSection";
import Subtitle from "./Text/Subtitle";
import Body from "./Text/Body";
import {Skeleton, Stack} from "@mui/material";
import {StyledLearnMoreTooltip} from "../../../components/StyledTooltip";

export const REWARDS_TOOLTIP_TEXT =
  "Represents the Annual Percentage Rate (APR) that accrue on staked APT. Rewards are paid out by the network after each Epoch. APR is subject to change based on validator performance or in accordance with network specifications. There is no guarantee that the current APR will continue to apply in future periods.";
export const REWARDS_LEARN_MORE_LINK = "https://checkdot.io";

type StakingProps = {
  isSkeletonLoading: boolean;
};

export default function Staking({isSkeletonLoading}: StakingProps) {
  const totalVotingPower = "90763030788445253 ";
  const rewardsRateYearly = 7;

  return !isSkeletonLoading ? (
    <MetricSection>
      <Stack direction="row" spacing={1} alignItems="center">
        <Subtitle>{totalVotingPower ? totalVotingPower : "-"}</Subtitle>
        <Body color="inherit">APT Staked</Body>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Body>{`${rewardsRateYearly}% APR Reward`}</Body>{" "}
        <StyledLearnMoreTooltip
          text={REWARDS_TOOLTIP_TEXT}
          link={REWARDS_LEARN_MORE_LINK}
        />
      </Stack>
    </MetricSection>
  ) : (
    <MetricSection>
      <Stack direction="row" spacing={1} alignItems="center">
        <Skeleton width={190} />
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Skeleton width={150} />
      </Stack>
    </MetricSection>
  );
}
