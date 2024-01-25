import React, {useEffect, useState} from "react";
import {Stack, useMediaQuery, useTheme} from "@mui/material";
import Map from "./Components/Map";
import {grey} from "../../themes/colors/colorPalette";
import MapMetrics from "./Components/MapMetrics";
import {SkeletonTheme} from "react-loading-skeleton";

export default function ValidatorsMap() {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === "dark";
  const isOnMobile = !useMediaQuery(theme.breakpoints.up("md"));
  const backgroundColor = isDarkTheme ? grey[800] : grey[50];

  const validatorGeoGroups = [
    // {
    //   country: "Japan",
    //   countryLat: 35.67608333333334,
    //   countryLng: 139.69811666666666,
    //   nodes: [
    //   ],
    //   cities: [
    //   ],
    // },
    // {
    //   country: "United States",
    //   countryLat: 38.040414285714284,
    //   countryLng: -94.41109285714285,
    //   nodes: [
    //   ],
    //   cities: [
    //   ],
    // },
    {
      country: "France",
      countryLat: 48,
      countryLng: 2,
      nodes: [
        {
          peer_id:
            "85bec1dcb618004064ab52a594321e8f047bac53be8244c5d10ac136128e30f7",
          epoch: 5646,
          country: "France",
          region: "Western_Europe",
          city: "Paris",
          latitude: 48.9167,
          longitude: 2.3833,
        },
      ],
      cities: [
        {
          name: "Paris",
          count: 1,
        },
      ],
    },
  ];
  const validatorGeoMetric = {
    nodeCount: 1,
    countryCount: 1,
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
