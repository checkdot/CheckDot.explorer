import * as React from "react";
import {Box, Stack, useTheme} from "@mui/material";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import GeneralTableRow from "../../components/Table/GeneralTableRow";
import HashButton, {HashType} from "../../components/HashButton";
import {TableTransactionType} from "../../components/TransactionType";
import {
  getTableFormattedTimestamp,
  parseTimestamp,
  truncateAddress,
} from "../utils";
import GeneralTableCell from "../../components/Table/GeneralTableCell";
import GeneralTableBody from "../../components/Table/GeneralTableBody";
import {grey} from "../../themes/colors/colorPalette";
import {Link, useNavigate} from "../../routing";
import {CodeLineBox} from "../../components/CodeLineBox";
import {ArticleOutlined} from "@mui/icons-material";
import moment from "moment";

const momentTransactionDisplay = (transaction: any) => {
  if (transaction.timestamp === undefined) {
    return '...';
  }
  const latestBlock = moment(transaction.timestamp);
  const minutesRemaining = latestBlock.diff(moment(), 'minutes');
  const secondsRemaining = latestBlock.diff(moment(), 'seconds') - (minutesRemaining * 60);

  return `${-minutesRemaining} min(s) ${-secondsRemaining} sec(s) ago`;
}

function TransactionLogoCell() {
  const theme = useTheme();

  return (
    <GeneralTableCell width={48} sx={{textAlign: "left"}}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={48}
        height={48}
        bgcolor={theme.palette.mode === "dark" ? grey[900] : grey[100]}
        borderRadius={0.5}
      >
        <ArticleOutlined
          stroke={theme.palette.mode === "dark" ? grey[600] : grey[300]}
        />
      </Box>
    </GeneralTableCell>
  );
}

function TransactionHashCell({transaction}: any) {
  let hash = transaction.hash;
  const theme = useTheme();

  return (
    <GeneralTableCell>
      <Link to={`/tx/${hash}`} target="_blank" underline="none">
        {truncateAddress(hash)}
      </Link>
      <Typography
        color={theme.palette.mode === "dark" ? grey[400] : grey[500]}
        fontSize={12}
      >
        {"timestamp" in transaction
          ? `${momentTransactionDisplay(transaction)}`
          : "-"}
      </Typography>
    </GeneralTableCell>
  );
}

function TransactionAddressCell({transaction}: any) {
  let sender = transaction.sender;
  let receiver = transaction.receiver;
  const theme = useTheme();

  return (
    <GeneralTableCell>
      <Stack spacing={1}>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            fontSize={12}
            color={theme.palette.mode === "dark" ? grey[400] : grey[500]}
            marginRight={1}
          >
            From
          </Typography>{" "}
          {sender ? (
            <HashButton hash={sender} type={HashType.ACCOUNT} hideImage />
          ) : (
            "-"
          )}
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography
            fontSize={12}
            color={theme.palette.mode === "dark" ? grey[400] : grey[500]}
            marginRight={3}
          >
            To
          </Typography>{" "}
          {receiver ? (
            <HashButton hash={receiver} type={HashType.ACCOUNT} hideImage />
          ) : (
            "-"
          )}
        </Box>
      </Stack>
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
              {transaction.gas_used ?? 0} CDT
            </>
          ) : null}
        </Box>
      </Stack>
    </GeneralTableCell>
  );
}

const TransactionCells = Object.freeze({
  hash: TransactionHashCell,
  address: TransactionAddressCell,
  amountGas: TransactionAmountGasCell,
});

type TransactionColumn = keyof typeof TransactionCells;

const DEFAULT_COLUMNS: TransactionColumn[] = ["hash", "address", "amountGas"];

type UserTransactionRowProps = {
  tx: any;
  columns: TransactionColumn[];
};

function UserTransactionRow({tx, columns}: UserTransactionRowProps) {
  const navigate = useNavigate();
  const rowClick = () => {
    navigate(`/tx/${tx.hash}`);
  };
  const theme = useTheme();

  let colorsTx = {
    success: undefined,
    pending: theme.palette.mode === "light" ? "#ffa70687" : "#472f0387",
    error: theme.palette.mode === "light" ? "#961f1f42" : "#961f1f42",
  };

  return (
    <GeneralTableRow
      onClick={rowClick}
      style={{
        backgroundColor:
          tx.status == 1
            ? colorsTx["success"]
            : tx.status == 0
              ? colorsTx["pending"]
              : colorsTx["error"],
      }}
    >
      <TransactionLogoCell />
      {columns.map((column) => {
        const Cell = TransactionCells[column];
        return <Cell key={column} transaction={tx} />;
      })}
    </GeneralTableRow>
  );
}

type LatestUserTransactionsTableProps = {
  transactions: any[];
  columns?: TransactionColumn[];
};

export function LatestUserTransactionsTable({
  transactions,
  columns = DEFAULT_COLUMNS,
}: LatestUserTransactionsTableProps) {
  return (
    <Table>
      <GeneralTableBody>
        {transactions.map((tx, i) => {
          return (
            <UserTransactionRow
              key={`${i}-${tx.hash}`}
              tx={tx}
              columns={columns}
            />
          );
        })}
      </GeneralTableBody>
    </Table>
  );
}
