import * as React from "react";
import {Box} from "@mui/material";
import HashButton, {HashType} from "../../../components/HashButton";
import ContentBox from "../../../components/IndividualPageContent/ContentBox";
import ContentRow from "../../../components/IndividualPageContent/ContentRow";
import {TransactionStatus} from "../../../components/TransactionStatus";
import {getLearnMoreTooltip} from "../helpers";
import TimestampValue from "../../../components/IndividualPageContent/ContentValue/TimestampValue";
import TransactionFunction from "./Components/TransactionFunction";
import TransactionBlockRow from "./Components/TransactionBlockRow";
import JsonViewCard from "../../../components/IndividualPageContent/JsonViewCard";
import { ethers } from "ethers";

function UserTransferOrInteractionRows({transaction}: {transaction: any}) {
  const counterparty = transaction.counterparty;

  if (!counterparty) {
    return null;
  }

  return (
    <>
      {counterparty.role === "receiver" && (
        <ContentRow
          title="Receiver:"
          value={
            <HashButton hash={counterparty.address} type={HashType.ACCOUNT} />
          }
          tooltip={getLearnMoreTooltip("receiver")}
        />
      )}
      {counterparty.role === "smartContract" && (
        <ContentRow
          title="Smart Contract:"
          value={
            <HashButton hash={counterparty.address} type={HashType.ACCOUNT} />
          }
          tooltip={getLearnMoreTooltip("smartContract")}
        />
      )}
    </>
  );
}

function TransactionFunctionRow({transaction}: {transaction: any}) {
  return (
    <ContentRow
      title="Function:"
      value={<TransactionFunction transaction={transaction} />}
      tooltip={getLearnMoreTooltip("function")}
    />
  );
}

function TransactionAmountRow({transaction}: {transaction: any}) {
  const amount = transaction.amount;

  return (
    <ContentRow
      title="Amount:"
      value={amount !== undefined ? `${amount} CDT` : null}
      tooltip={getLearnMoreTooltip("amount")}
    />
  );
}

type UserTransactionOverviewTabProps = {
  transaction: any;
};

export default function UserTransactionOverviewTab({
  transaction,
}: UserTransactionOverviewTabProps) {
  return (
    <Box marginBottom={3}>
      <ContentBox padding={4}>
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
        <ContentRow
          title="Sender:"
          value={
            <HashButton hash={transaction.sender} type={HashType.ACCOUNT} />
          }
          tooltip={getLearnMoreTooltip("sender")}
        />
        <UserTransferOrInteractionRows transaction={transaction} />
        <TransactionFunctionRow transaction={transaction} />
        <TransactionAmountRow transaction={transaction} />
      </ContentBox>
      <ContentBox>
        <TransactionBlockRow transaction={transaction} />
        <ContentRow
          title="Sequence Number:"
          value={`${transaction.sequence_number}`}
          tooltip={getLearnMoreTooltip("sequence_number")}
        />
        {transaction.timestamp && (<ContentRow
          title="Timestamp:"
          value={<TimestampValue timestamp={transaction.timestamp} />}
          tooltip={getLearnMoreTooltip("timestamp")}
        />)}
        <ContentRow
          title="Gas Fee:"
          value={transaction.gas_used ? `${transaction.gas_used} CDT (${transaction.gas_used ? (transaction.gas_used - transaction.gas_fee) : ''} Burnt)` : undefined}
          tooltip={getLearnMoreTooltip("gas_fee")}
        />
        <ContentRow
          title="Gas Unit Price:"
          value={transaction.gas_unit_price ? `${transaction.gas_unit_price} CDT` : undefined}
          tooltip={getLearnMoreTooltip("gas_unit_price")}
        />
      </ContentBox>
      <ContentBox>
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
