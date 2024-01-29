import * as React from "react";
import {Box} from "@mui/material";
import ContentRow from "../../../components/IndividualPageContent/ContentRow";
import ContentBox from "../../../components/IndividualPageContent/ContentBox";
import {TransactionStatus} from "../../../components/TransactionStatus";
import {getLearnMoreTooltip} from "../helpers";
import TimestampValue from "../../../components/IndividualPageContent/ContentValue/TimestampValue";
import TransactionBlockRow from "./Components/TransactionBlockRow";

type StateCheckpointOverviewTabProps = {
  transaction: any;
};

export default function StateCheckpointOverviewTab({
  transaction,
}: StateCheckpointOverviewTabProps) {
  return (
    <Box marginBottom={3}>
      <ContentBox>
        <ContentRow
          title={"Hash:"}
          value={<Box sx={{fontWeight: 600}}>{transaction.hash}</Box>}
          tooltip={getLearnMoreTooltip("hash")}
        />
        <ContentRow
          title="Status:"
          value={<TransactionStatus success={transaction.success} />}
          tooltip={getLearnMoreTooltip("status")}
        />
        <TransactionBlockRow transaction={transaction} />
        {"timestamp" in transaction && (
          <ContentRow
            title="Timestamp:"
            value={<TimestampValue timestamp={transaction.timestamp} />}
            tooltip={getLearnMoreTooltip("timestamp")}
          />
        )}
      </ContentBox>
    </Box>
  );
}
