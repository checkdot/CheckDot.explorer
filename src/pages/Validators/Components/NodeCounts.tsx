import {Skeleton, Typography} from "@mui/material";
import React from "react";
import {grey} from "../../../themes/colors/colorPalette";
import {
  fontSizeBodySmall,
  fontSizeSubtitle,
  fontSizeTitle,
  fontSizeTitleSmall,
} from "../constants";
import MetricSection from "./MetricSection";

type NodeCountsProps = {
  validatorGeoMetric: any;
  isSkeletonLoading: boolean;
};

export default function NodeCounts({
  validatorGeoMetric,
  isSkeletonLoading,
}: NodeCountsProps) {
  const numberOfActiveValidators = validatorGeoMetric.nodeCount;

  return !isSkeletonLoading ? (
    <MetricSection>
      <Typography sx={{fontSize: {xs: fontSizeTitleSmall, md: fontSizeTitle}}}>
        {numberOfActiveValidators} Nodes
      </Typography>
      <Typography
        sx={{fontSize: {xs: fontSizeBodySmall, md: fontSizeSubtitle}}}
        color={grey[450]}
      >
        {validatorGeoMetric.countryCount} Countries
      </Typography>
      <Typography
        sx={{fontSize: {xs: fontSizeBodySmall, md: fontSizeSubtitle}}}
        color={grey[450]}
      >
        {validatorGeoMetric.cityCount} Cities
      </Typography>
    </MetricSection>
  ) : (
    <MetricSection>
      <Typography sx={{fontSize: {xs: fontSizeTitleSmall, md: fontSizeTitle}}}>
        <Skeleton width={150} />
      </Typography>
      <Typography
        sx={{fontSize: {xs: fontSizeBodySmall, md: fontSizeSubtitle}}}
      >
        <Skeleton width={140} />
      </Typography>
      <Typography
        sx={{fontSize: {xs: fontSizeBodySmall, md: fontSizeSubtitle}}}
      >
        <Skeleton width={130} />
      </Typography>
    </MetricSection>
  );
}
