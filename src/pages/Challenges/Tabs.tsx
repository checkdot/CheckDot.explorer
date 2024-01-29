import * as React from "react";
import {Box} from "@mui/material";
import {assertNever} from "../../utils";
import StyledTabs from "../../components/StyledTabs";
import StyledTab from "../../components/StyledTab";
import LeaderboardTab from "./Tabs/LeaderboardTab";
import ChallengesTab from "./Tabs/ChallengesTab";
import {useParams} from "react-router-dom";
import {useNavigate} from "../../routing";
import {AutoGraph, GridViewRounded} from "@mui/icons-material";

const TAB_VALUES: TabValue[] = ["leaderboard", "challenges"];

const TabComponents = Object.freeze({
  leaderboard: LeaderboardTab,
  challenges: ChallengesTab,
});

export type TabValue = keyof typeof TabComponents;

function getTabLabel(value: TabValue): string {
  switch (value) {
    case "leaderboard":
      return "Leaderboard";
    case "challenges":
      return "Challenges";
    default:
      return assertNever(value);
  }
}

function getTabIcon(value: TabValue): JSX.Element {
  switch (value) {
    case "leaderboard":
      return <GridViewRounded fontSize="small" />;
    case "challenges":
      return <AutoGraph fontSize="small" />;
    default:
      return assertNever(value);
  }
}

type TabPanelProps = {
  value: TabValue;
  address: string;
};

function TabPanel({value, address}: TabPanelProps): JSX.Element {
  const TabComponent = TabComponents[value];
  return <TabComponent address={address} />;
}

type ChallengesTabsProps = {
  address: string;
  tabValues?: TabValue[];
};

// TODO: create reusable Tabs for all pages
export default function ChallengesTabs({
  address,
  tabValues = TAB_VALUES,
}: ChallengesTabsProps): JSX.Element {
  const {tab} = useParams();
  const navigate = useNavigate();
  let effectiveTab: TabValue = (tab ?? TAB_VALUES[0]) as TabValue;

  const handleChange = (event: React.SyntheticEvent, newValue: TabValue) => {
    navigate(`/challenges/${newValue}`, {replace: true});
  };

  return (
    <Box sx={{width: "100%"}}>
      <Box>
        <StyledTabs value={effectiveTab} onChange={handleChange}>
          {tabValues.map((value, i) => (
            <StyledTab
              key={i}
              value={value}
              icon={getTabIcon(value)}
              label={getTabLabel(value)}
              isFirst={i === 0}
              isLast={i === tabValues.length - 1}
            />
          ))}
        </StyledTabs>
      </Box>
      <Box>
        <TabPanel value={effectiveTab} address={address} />
      </Box>
    </Box>
  );
}
