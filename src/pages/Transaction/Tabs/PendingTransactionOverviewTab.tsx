import * as React from "react";
import {Box} from "@mui/material";
import HashButton, {HashType} from "../../../components/HashButton";
import ContentBox from "../../../components/IndividualPageContent/ContentBox";
import ContentRow from "../../../components/IndividualPageContent/ContentRow";
import {getLearnMoreTooltip} from "../helpers";
import TimestampValue from "../../../components/IndividualPageContent/ContentValue/TimestampValue";
import JsonViewCard from "../../../components/IndividualPageContent/JsonViewCard";

type PendingTransactionOverviewTabProps = {
  transaction: any;
};

export default function PendingTransactionOverviewTab({
  transaction,
}: PendingTransactionOverviewTabProps) {
  return (
    <Box marginBottom={3}>
      <ContentBox>
        <ContentRow
          title="Sender:"
          value={
            <HashButton hash={transaction.sender} type={HashType.ACCOUNT} />
          }
          tooltip={getLearnMoreTooltip("sender")}
        />
        <ContentRow
          title="Sequence Number:"
          value={transaction.sequence_number}
          tooltip={getLearnMoreTooltip("sequence_number")}
        />
        <ContentRow
          title="Gas Unit Price:"
          value={transaction.gas_unit_price}
          tooltip={getLearnMoreTooltip("gas_unit_price")}
        />
        <ContentRow
          title="Max Gas Limit:"
          value={transaction.max_gas_amount}
          tooltip={getLearnMoreTooltip("max_gas_amount")}
        />
        <ContentRow
          title="Signature:"
          value={
            <JsonViewCard data={transaction.signature} collapsedByDefault />
          }
          tooltip={getLearnMoreTooltip("signature")}
        />
      </ContentBox>
    </Box>
  );
}
