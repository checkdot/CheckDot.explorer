import * as React from "react";
import {Box, Stack, useTheme} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import GeneralTableRow from "../../components/Table/GeneralTableRow";
import GeneralTableHeaderCell from "../../components/Table/GeneralTableHeaderCell";
import HashButton, {HashType} from "../../components/HashButton";
import {TableTransactionType} from "../../components/TransactionType";
import {functionNames, getTableFormattedTimestamp, truncateAddress} from "../utils";
import TransactionTypeTooltip from "./Components/TransactionTypeTooltip";
import GeneralTableCell from "../../components/Table/GeneralTableCell";
import GeneralTableBody from "../../components/Table/GeneralTableBody";
import {grey} from "../../themes/colors/colorPalette";
import {Link, useNavigate} from "../../routing";
import { ethers } from "ethers";
import { CodeLineBox } from "../../components/CodeLineBox";
import { useColorMode } from "../../context";

function SequenceNumberCell(transaction: any) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      {"sequence_number" in transaction && transaction.sequence_number}
    </GeneralTableCell>
  );
}

function TransactionHashCell({transaction}: any) {
  let hash = transaction.hash;
  return (
    <GeneralTableCell>
      <CodeLineBox>{truncateAddress(hash)}</CodeLineBox>
    </GeneralTableCell>
  );
}

function TransactionTypeCell({transaction}: any) {
  return (
    <GeneralTableCell>
      {<TableTransactionType type={transaction.type} />}
    </GeneralTableCell>
  );
}

function TransactionTimestampCell({transaction}: any) {
  const timestamp =
    "timestamp" in transaction ? (
      getTableFormattedTimestamp(transaction.timestamp)
    ) : (
      // Genesis transaction
      <Typography variant="subtitle2" align="center">
        -
      </Typography>
    );

  return <GeneralTableCell>{timestamp}</GeneralTableCell>;
}

function TransactionSenderCell({transaction}: any) {
  let sender = transaction.sender;

  return (
    <GeneralTableCell>
      {sender && <HashButton hash={sender} type={HashType.ACCOUNT} />}
    </GeneralTableCell>
  );
}

function TransactionReceiverOrCounterPartyCell({transaction}: any) {
  const counterparty = transaction.receiver;
  return (
    <GeneralTableCell>
      {counterparty && (
        <HashButton hash={counterparty} type={HashType.ACCOUNT} />
      )}
    </GeneralTableCell>
  );
}

function TransactionFunctionCell({transaction}: any) {
  const transactionName = functionNames[transaction.payload.type] ?? 'Unknown';
  return (
    <GeneralTableCell
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    >
    {transactionName}
    </GeneralTableCell>
  );
}

function TransactionAmount({transaction}: any) {
  const amount = transaction.amount;

  return <Box>{`${amount} CDT`}</Box>;
}

function TransactionAmountGasCell({transaction}: any) {
  return (
    <GeneralTableCell sx={{paddingY: 1}}>
      <Stack sx={{textAlign: "right"}}>
        <TransactionAmount transaction={transaction} />
        <Box sx={{fontSize: 11, color: grey[450]}}>
          {"gas_used" in transaction && "gas_unit_price" in transaction ? (
            <>
              <>Gas </>
              { transaction.gas_used ?? 0 } CDT
            </>
          ) : null}
        </Box>
      </Stack>
    </GeneralTableCell>
  );
}

const TransactionCells = Object.freeze({
  sequenceNum: SequenceNumberCell,
  hash: TransactionHashCell,
  type: TransactionTypeCell,
  timestamp: TransactionTimestampCell,
  sender: TransactionSenderCell,
  receiverOrCounterParty: TransactionReceiverOrCounterPartyCell,
  function: TransactionFunctionCell,
  amountGas: TransactionAmountGasCell,
});

type TransactionColumn = keyof typeof TransactionCells;

const DEFAULT_COLUMNS: TransactionColumn[] = [
  "hash",
  "type",
  "timestamp",
  "sender",
  "receiverOrCounterParty",
  "function",
  "amountGas",
];

type TransactionRowProps = {
  transaction: any;
  columns: TransactionColumn[];
};

function TransactionRow({transaction, columns}: TransactionRowProps) {
  const navigate = useNavigate();

  const rowClick = () => {
    navigate(`/tx/${transaction.hash}`);
  };

  return (
    <GeneralTableRow onClick={rowClick}>
      {columns.map((column) => {
        const Cell = TransactionCells[column];
        return <Cell key={column} transaction={transaction} />;
      })}
    </GeneralTableRow>
  );
}

type UserTransactionRowProps = {
  tx: any;
  columns: TransactionColumn[];
  address?: string;
};

function UserTransactionRow({
  tx,
  columns,
  address,
}: UserTransactionRowProps) {
  const navigate = useNavigate();
  const rowClick = () => {
    navigate(`/tx/${tx.hash}`);
  };
  const theme = useTheme();

  let colorsTx = {
    'success': undefined,
    'pending': theme.palette.mode === "light" ? '#ffa70687' : '#472f0387',
    'error': theme.palette.mode === "light" ? '#961f1f42' : '#961f1f42',
  };

  return (
    <GeneralTableRow onClick={rowClick} style={{ backgroundColor: tx.status == 1 ? colorsTx['success'] : (tx.status == 0 ? colorsTx['pending'] : colorsTx['error']) }}>
      {columns.map((column) => {
        const Cell = TransactionCells[column];
        return <Cell key={column} transaction={tx} />;
      })}
    </GeneralTableRow>
  );
}

type TransactionHeaderCellProps = {
  column: TransactionColumn;
};

function TransactionHeaderCell({column}: TransactionHeaderCellProps) {
  switch (column) {
    case "sequenceNum":
      return <GeneralTableHeaderCell header="#" />;
    case "hash":
      return <GeneralTableHeaderCell header="Hash" />;
    case "type":
      return (
        <GeneralTableHeaderCell
          header="Type"
          tooltip={<TransactionTypeTooltip />}
          sx={{textAlign: "center"}}
        />
      );
    case "timestamp":
      return <GeneralTableHeaderCell header="Timestamp" />;
    case "sender":
      return <GeneralTableHeaderCell header="Sender" />;
    case "receiverOrCounterParty":
      return <GeneralTableHeaderCell header="Sent To" />;
    case "function":
      return <GeneralTableHeaderCell header="Function" />;
    case "amountGas":
      return <GeneralTableHeaderCell header="Amount" textAlignRight />;
    default:
      return;
  }
}

type TransactionsTableProps = {
  transactions: any[];
  columns?: TransactionColumn[];
  address?: string;
};

export default function TransactionsTable({
  transactions,
  columns = DEFAULT_COLUMNS,
}: TransactionsTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TransactionHeaderCell key={column} column={column} />
          ))}
        </TableRow>
      </TableHead>
      <GeneralTableBody>
        {transactions.map((transaction, i) => {
          return (
            <TransactionRow
              key={`${i}-${transaction.hash}`}
              transaction={transaction}
              columns={columns}
            />
          );
        })}
      </GeneralTableBody>
    </Table>
  );
}

type UserTransactionsTableProps = {
  transactions: any[];
  columns?: TransactionColumn[];
  address?: string;
};

export function UserTransactionsTable({
  transactions,
  columns = DEFAULT_COLUMNS,
  address,
}: UserTransactionsTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TransactionHeaderCell key={column} column={column} />
          ))}
        </TableRow>
      </TableHead>
      <GeneralTableBody>
        {transactions.map((tx, i) => {
          return (
            <UserTransactionRow
              key={`${i}-${tx.hash}`}
              tx={tx}
              columns={columns}
              address={address}
            />
          );
        })}
      </GeneralTableBody>
    </Table>
  );
}
