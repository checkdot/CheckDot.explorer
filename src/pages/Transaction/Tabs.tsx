import * as React from "react";
import {Box} from "@mui/material";
import StyledTabs from "../../components/StyledTabs";
import StyledTab from "../../components/StyledTab";
import UserTransactionOverviewTab from "./Tabs/UserTransactionOverviewTab";
import StateCheckpointOverviewTab from "./Tabs/StateCheckpointOverviewTab";
import PendingTransactionOverviewTab from "./Tabs/PendingTransactionOverviewTab";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import EventsTab from "./Tabs/EventsTab";
import PayloadTab from "./Tabs/PayloadTab";
import ChangesTab from "./Tabs/ChangesTab";
import UnknownTab from "./Tabs/UnknownTab";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CallMergeOutlinedIcon from "@mui/icons-material/CallMergeOutlined";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BalanceChangeTab from "./Tabs/BalanceChangeTab";
import {useParams} from "react-router-dom";
import {useNavigate} from "../../routing";
import { assertNever } from "../../utils";

function getTabValues(transaction: any): TabValue[] {
  switch (transaction.type) {
    case "user_transaction":
      return [
        "userTxnOverview",
        "balanceChange",
        "events",
        "payload",
        "changes",
      ];
    default:
      return ["unknown"];
  }
}

const TabComponents = Object.freeze({
  userTxnOverview: UserTransactionOverviewTab,
  stateCheckpointOverview: StateCheckpointOverviewTab,
  pendingTxnOverview: PendingTransactionOverviewTab,
  balanceChange: BalanceChangeTab,
  events: EventsTab,
  payload: PayloadTab,
  changes: ChangesTab,
  unknown: UnknownTab,
});

type TabValue = keyof typeof TabComponents;

function getTabLabel(value: TabValue): string {
  switch (value) {
    case "userTxnOverview":
    case "stateCheckpointOverview":
    case "pendingTxnOverview":
      return "Overview";
    case "balanceChange":
      return "Balance Change";
    case "events":
      return "Events";
    case "payload":
      return "Payload";
    case "changes":
      return "Changes";
    case "unknown":
      return "Unknown";
    default:
      return assertNever(value);
  }
}

function getTabIcon(value: TabValue): JSX.Element {
  switch (value) {
    case "userTxnOverview":
    case "stateCheckpointOverview":
    case "pendingTxnOverview":
      return <BarChartOutlinedIcon fontSize="small" />;
    case "balanceChange":
      return <AccountBalanceWalletOutlinedIcon fontSize="small" />;
    case "events":
      return <CallMergeOutlinedIcon fontSize="small" />;
    case "payload":
      return <FileCopyOutlinedIcon fontSize="small" />;
    case "changes":
      return <CodeOutlinedIcon fontSize="small" />;
    case "unknown":
      return <HelpOutlineOutlinedIcon fontSize="small" />;
    default:
      return assertNever(value);
  }
}

type TabPanelProps = {
  value: TabValue;
  transaction: any;
};

function TabPanel({value, transaction}: TabPanelProps): JSX.Element {
  const TabComponent = TabComponents[value];
  return <TabComponent transaction={transaction} />;
}

type TransactionTabsProps = {
  transaction: any;
  tabValues?: TabValue[];
};

export default function TransactionTabs({
  transaction,
  tabValues = getTabValues(transaction),
}: TransactionTabsProps): JSX.Element {
  const {tab, txnHashOrVersion} = useParams();
  const navigate = useNavigate();
  const value =
    tab === undefined ? getTabValues(transaction)[0] : (tab as TabValue);

  const handleChange = (event: React.SyntheticEvent, newValue: TabValue) => {
    navigate(`/txn/${txnHashOrVersion}/${newValue}`, {replace: true});
  };

  return (
    <Box sx={{width: "100%"}}>
      <Box>
        <StyledTabs value={value} onChange={handleChange}>
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
        <TabPanel value={value} transaction={transaction} />
      </Box>
    </Box>
  );
}
