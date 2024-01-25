import * as React from "react";
import {Box, Stack} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import GeneralTableRow from "../../components/Table/GeneralTableRow";
import GeneralTableHeaderCell from "../../components/Table/GeneralTableHeaderCell";
import HashButton, {HashType} from "../../components/HashButton";
import {TableTransactionType} from "../../components/TransactionType";
import {getTableFormattedTimestamp} from "../utils";
import TransactionTypeTooltip from "./Components/TransactionTypeTooltip";
import GeneralTableCell from "../../components/Table/GeneralTableCell";
import GeneralTableBody from "../../components/Table/GeneralTableBody";
import {grey} from "../../themes/colors/colorPalette";
import {Link, useNavigate} from "../../routing";

function SequenceNumberCell(transaction: any) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      {"sequence_number" in transaction && transaction.sequence_number}
    </GeneralTableCell>
  );
}

function TransactionVersionStatusCell({transaction}: any) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      <Stack direction="row" spacing={0.5}>
        <Link
          to={`/txn/${"version" in transaction && transaction.version}`}
          color="primary"
          underline="none"
        >
          {"version" in transaction && transaction.version}
        </Link>
      </Stack>
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
  return (
    <GeneralTableCell
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    ></GeneralTableCell>
  );
}

function TransactionAmount({transaction}: any) {
  const amount = transaction.amount;

  return <Box>{amount}</Box>;
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
              1,233.000 CDT
            </>
          ) : null}
        </Box>
      </Stack>
    </GeneralTableCell>
  );
}

const TransactionCells = Object.freeze({
  sequenceNum: SequenceNumberCell,
  versionStatus: TransactionVersionStatusCell,
  type: TransactionTypeCell,
  timestamp: TransactionTimestampCell,
  sender: TransactionSenderCell,
  receiverOrCounterParty: TransactionReceiverOrCounterPartyCell,
  function: TransactionFunctionCell,
  amountGas: TransactionAmountGasCell,
});

type TransactionColumn = keyof typeof TransactionCells;

const DEFAULT_COLUMNS: TransactionColumn[] = [
  "versionStatus",
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
    navigate(`/txn/${"version" in transaction && transaction.version}`);
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
  version: number;
  columns: TransactionColumn[];
  address?: string;
};

function UserTransactionRow({
  version,
  columns,
  address,
}: UserTransactionRowProps) {
  const navigate = useNavigate();
  const {data: transaction, isError} = {
    data: {
      version,
      sequence_number: 1,
      sender:
        "0x67b4082afa36f67ab5d0a9539a31a40ca8db97a3a2e37e2d4eb2746880fa618b",
      receiver:
        "0x5ae6789dd2fec1a9ec9cccfb3acaf12e93d432f0a3a42c92fe1a9d490b7bbc06",
      type: "user_transaction",
      amount: 0,
      gas_used: 111111111111,
      gas_unit_price: 11111,
      timestamp: 170611865,
    },
    isError: false,
  };

  if (!transaction || isError) {
    return null;
  }

  const rowClick = () => {
    navigate(`/txn/${version}`);
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

type TransactionHeaderCellProps = {
  column: TransactionColumn;
};

function TransactionHeaderCell({column}: TransactionHeaderCellProps) {
  switch (column) {
    case "sequenceNum":
      return <GeneralTableHeaderCell header="#" />;
    case "versionStatus":
      return <GeneralTableHeaderCell header="Version" />;
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
  versions: number[];
  columns?: TransactionColumn[];
  address?: string;
};

export function UserTransactionsTable({
  versions,
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
        {versions.map((version, i) => {
          return (
            <UserTransactionRow
              key={`${i}-${version}`}
              version={version}
              columns={columns}
              address={address}
            />
          );
        })}
      </GeneralTableBody>
    </Table>
  );
}
