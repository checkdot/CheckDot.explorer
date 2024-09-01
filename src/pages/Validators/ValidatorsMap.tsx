import React, {useEffect, useState} from "react";
import {Stack, useMediaQuery, useTheme} from "@mui/material";
import Map from "./Components/Map";
import {grey} from "../../themes/colors/colorPalette";
import MapMetrics from "./Components/MapMetrics";
import {SkeletonTheme} from "react-loading-skeleton";

export default function ValidatorsMap({ value, nodes }: any) {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === "dark";
  const isOnMobile = !useMediaQuery(theme.breakpoints.up("md"));
  const backgroundColor = isDarkTheme ? grey[800] : grey[50];

  const validatorGeoGroups = nodes.reduce((acc, node) => {
    let geo = acc.find(x => x.country === node.location_stats.country);

    if (geo === undefined) {
      geo = {
        country: node.location_stats.country,
        countryLat: node.location_stats.latitude,
        countryLng: node.location_stats.longitude,
        nodes: [],
        cities: [],
      }

      if (node.location_stats.country === 'Unknown') {
        geo.countryLat = -40;
        geo.countryLng = -170;
      }

      acc.push(geo);
    }
    geo.nodes.push({
        peer_id: "85bec1dcb618004064ab52a594321e8f047bac53be8244c5d10ac136128e30f7",
        epoch: 0,
        country: node.location_stats.country,
        latitude: node.location_stats.latitude,
        longitude: node.location_stats.longitude,
    });
    return acc;
  }, []);

  const validatorGeoMetric = {
    nodeCount: nodes.length,
    countryCount: validatorGeoGroups.length,
    cityCount: 1,
  };
  const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(true);

  const curEpoch = 5648;
  const totalVotingPower = 1;
  const numberOfActiveValidators = 1;

  useEffect(() => {
    if (curEpoch && totalVotingPower && numberOfActiveValidators) {
      setIsSkeletonLoading(false);
    }
  }, [curEpoch, totalVotingPower, numberOfActiveValidators]);

  return (
    <SkeletonTheme baseColor={isDarkTheme ? grey[500] : undefined}>
      {isOnMobile ? (
        <Stack
          direction="column"
          justifyContent="space-between"
          marginY={4}
          sx={{backgroundColor: backgroundColor}}
          overflow="hidden"
        >
          <Map validatorGeoGroups={validatorGeoGroups} />
          <MapMetrics
            validatorGeoMetric={validatorGeoMetric}
            isOnMobile={isOnMobile}
            isSkeletonLoading={isSkeletonLoading}
          />
        </Stack>
      ) : (
        <Stack
          direction="row"
          justifyContent="space-between"
          marginY={4}
          sx={{backgroundColor: backgroundColor}}
          overflow="hidden"
        >
          <MapMetrics
            validatorGeoMetric={validatorGeoMetric}
            isOnMobile={isOnMobile}
            isSkeletonLoading={isSkeletonLoading}
          />
          <Map validatorGeoGroups={validatorGeoGroups} />
        </Stack>
      )}
    </SkeletonTheme>
  );
}
