import * as React from "react";
import {Box, Stack} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import GeneralTableCell from "../../../components/Table/GeneralTableCell";
import HashButton, {HashType} from "../../../components/HashButton";
import GeneralTableHeaderCell from "../../../components/Table/GeneralTableHeaderCell";
import GeneralTableBody from "../../../components/Table/GeneralTableBody";
import GeneralTableRow from "../../../components/Table/GeneralTableRow";

function LeaderboardRankCell({data}: any) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>{data.rank}</GeneralTableCell>
  );
}

function LeaderboardCompletedCell({data}: any) {
  return (
    <GeneralTableCell>
      <Typography variant="subtitle2" align="center">
        {data.completed} Quests
      </Typography>
    </GeneralTableCell>
  );
}

function LeaderboardTotalPointsCell({data}: any) {
  return (
    <GeneralTableCell>
      <Typography variant="subtitle2" align="right">
        {data.totalPoints} Points
      </Typography>
    </GeneralTableCell>
  );
}

function LeaderboardUserCell({data}: any) {
  let user = data.user;

  return (
    <GeneralTableCell>
      {user && <HashButton hash={user} type={HashType.ACCOUNT} />}
    </GeneralTableCell>
  );
}

const LeaderboardCells = Object.freeze({
  rank: LeaderboardRankCell,
  user: LeaderboardUserCell,
  completed: LeaderboardCompletedCell,
  totalPoints: LeaderboardTotalPointsCell,
});

type LeaderboardColumn = keyof typeof LeaderboardCells;

const DEFAULT_COLUMNS: LeaderboardColumn[] = [
  "rank",
  "user",
  "completed",
  "totalPoints",
];

type LeaderboardRowProps = {
  data: any;
  columns: LeaderboardColumn[];
};

function LeaderboardRow({data, columns}: LeaderboardRowProps) {
  return (
    <GeneralTableRow>
      {columns.map((column) => {
        const Cell = LeaderboardCells[column];
        return <Cell key={column} data={data} />;
      })}
    </GeneralTableRow>
  );
}

type LeaderboardHeaderCellProps = {
  column: LeaderboardColumn;
};

function LeaderboardHeaderCell({column}: LeaderboardHeaderCellProps) {
  switch (column) {
    case "rank":
      return <GeneralTableHeaderCell header="#" />;
    case "user":
      return <GeneralTableHeaderCell header="User" />;
    case "completed":
      return (
        <GeneralTableHeaderCell header="Completed" sx={{textAlign: "center"}} />
      );
    case "totalPoints":
      return (
        <GeneralTableHeaderCell
          header="Total Points"
          sx={{textAlign: "right"}}
        />
      );
    default:
      return;
  }
}

type LeaderboardTableProps = {
  data: any[];
  columns?: LeaderboardColumn[];
};

export default function LeaderboardTable({
  data,
  columns = DEFAULT_COLUMNS,
}: LeaderboardTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <LeaderboardHeaderCell key={column} column={column} />
          ))}
        </TableRow>
      </TableHead>
      <GeneralTableBody>
        {data.map((item, i) => {
          return (
            <LeaderboardRow
              key={`${i}-${item.rank}`}
              data={item}
              columns={columns}
            />
          );
        })}
      </GeneralTableBody>
    </Table>
  );
}
