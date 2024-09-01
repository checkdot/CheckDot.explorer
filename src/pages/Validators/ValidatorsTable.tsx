import React, {useState} from "react";
import {Box, Stack, Table, TableHead, TableRow, Button} from "@mui/material";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GeneralTableRow from "../../components/Table/GeneralTableRow";
import GeneralTableHeaderCell from "../../components/Table/GeneralTableHeaderCell";
import {assertNever} from "../../utils";
import HashButton, {HashType} from "../../components/HashButton";
import GeneralTableBody from "../../components/Table/GeneralTableBody";
import GeneralTableCell from "../../components/Table/GeneralTableCell";
import RewardsPerformanceTooltip from "./Components/RewardsPerformanceTooltip";
import LastEpochPerformanceTooltip from "./Components/LastEpochPerformanceTooltip";
import {useGlobalState} from "../../global-config/GlobalConfig";

function getSortedValidators(
  validators: any[],
  column: Column,
  direction: "desc" | "asc",
  filterZeroVotingPower = true,
) {
  const validatorsCopy: any[] = JSON.parse(JSON.stringify(validators));
  let filteredValidators = validatorsCopy;
  if (filterZeroVotingPower) {
    filteredValidators = validatorsCopy.filter((validator) => {
      return Number(validator.voting_power) !== 0;
    });
  }
  const orderedValidators = getValidatorsOrderedBy(filteredValidators, column);

  return direction === "desc" ? orderedValidators : orderedValidators.reverse();
}

function getValidatorsOrderedBy(validatorsCopy: any[], column: Column) {
  switch (column) {
    // case "votingPower":
    //   return validatorsCopy.sort(
    //     (validator1, validator2) =>
    //       parseInt(validator2.voting_power) - parseInt(validator1.voting_power),
    //   );
    // case "rewardsPerf":
    //   return validatorsCopy.sort(
    //     (validator1, validator2) =>
    //       (validator2.rewards_growth ?? 0) - (validator1.rewards_growth ?? 0),
    //   );
    case "apy":
      return validatorsCopy.sort(
        (validator1, validator2) =>
          (validator2.apy ?? 0) - (validator1.apy ?? 0),
      );
    // case "lastEpochPerf":
    //   return validatorsCopy.sort(
    //     (validator1, validator2) =>
    //       parseInt(validator2.last_epoch_performance ?? "") -
    //       parseInt(validator1.last_epoch_performance ?? ""),
    //   );
    case "location":
      return validatorsCopy.sort((validator1, validator2) =>
        (validator1.location_stats?.city ?? "zz").localeCompare(
          validator2.location_stats?.city ?? "zz",
        ),
      );
    default:
      return validatorsCopy;
  }
}

type SortableHeaderCellProps = {
  header: string;
  column: Column;
  direction?: "desc" | "asc";
  setDirection?: (dir: "desc" | "asc") => void;
  setSortColumn: (col: Column) => void;
  tooltip?: React.ReactNode;
  isTableTooltip?: boolean;
};

function SortableHeaderCell({
  header,
  column,
  direction,
  setDirection,
  setSortColumn,
  tooltip,
  isTableTooltip,
}: SortableHeaderCellProps) {
  return (
    <GeneralTableHeaderCell
      header={header}
      textAlignRight
      sortable
      direction={direction}
      selectAndSetDirection={(dir) => {
        setSortColumn(column);
        if (setDirection) {
          setDirection(dir);
        }
      }}
      tooltip={tooltip}
      isTableTooltip={isTableTooltip}
    />
  );
}

type ValidatorHeaderCellProps = {
  column: Column;
  direction?: "desc" | "asc";
  setDirection?: (dir: "desc" | "asc") => void;
  setSortColumn: (col: Column) => void;
};

function ValidatorHeaderCell({
  column,
  direction,
  setDirection,
  setSortColumn,
}: ValidatorHeaderCellProps) {
  switch (column) {
    case "addr":
      return <GeneralTableHeaderCell header="UI Address" />;
    case "operatorAddr":
      return <GeneralTableHeaderCell header="Operator Address" />;
      case "apy":
        return (
          <SortableHeaderCell
            header="APY"
            column={column}
            direction={direction}
            setDirection={setDirection}
            setSortColumn={setSortColumn}
          />
        );
    case "location":
      return (
        <SortableHeaderCell
          header="Location"
          column={column}
          direction={direction}
          setDirection={setDirection}
          setSortColumn={setSortColumn}
        />
      );
    case "delegate":
      return <GeneralTableHeaderCell header="Action" textAlignRight={true} />;
    case "name":
      return <GeneralTableHeaderCell header="Name" textAlignRight={false} />;
    default:
      return assertNever(column);
  }
}

type ValidatorCellProps = {
  validator: any;
};

export function ValidatorAddrCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      <HashButton hash={validator.servers.static.domain} type={HashType.LINK} />
    </GeneralTableCell>
  );
}

export function OperatorAddrCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      <HashButton
        hash={validator.address}
        type={HashType.NODE}
        isValidator
      />
    </GeneralTableCell>
  );
}

function NameCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "start"}}>
      {`${validator.name ?? 'Anonymous'}`}
    </GeneralTableCell>
  );
}

function ApyCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "right"}}>
      {`${validator.apy.toFixed(2)} %`}
    </GeneralTableCell>
  );
}

function LocationCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "right"}}>
      {validator.location_stats?.country
        ? `${validator.location_stats?.country}`
        : "-"}
    </GeneralTableCell>
  );
}

function DelegateCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "right"}}>
      <Button
        color="primary"
        variant="text"
        onClick={() => {}}
        sx={{
          mb: 0,
          p: 0,
          "&:hover": {
            background: "transparent",
          },
        }}
        startIcon={<GroupAddIcon />}
      >
        <a target="_blank" href={validator.host} style={{ color: 'inherit', textDecoration: 'none' }}>Delegate</a>
      </Button>
    </GeneralTableCell>
  );
}

const ValidatorCells = Object.freeze({
  addr: ValidatorAddrCell,
  name: NameCell,
  operatorAddr: OperatorAddrCell,
  apy: ApyCell,
  location: LocationCell,
  delegate: DelegateCell
});

type Column = keyof typeof ValidatorCells;

const DEFAULT_COLUMNS: Column[] = [
  "operatorAddr",
  "name",
  "addr",
  "location",
];

const DELEGATORS_COLUMNS: Column[] = [
  "operatorAddr",
  "name",
  "addr",
  "apy",
  "location",
  "delegate"
];

type ValidatorRowProps = {
  validator: any;
  columns: Column[];
};

function ValidatorRow({validator, columns}: ValidatorRowProps) {
  return (
    <GeneralTableRow>
      {columns.map((column) => {
        const Cell = ValidatorCells[column];
        return <Cell key={column} validator={validator} />;
      })}
    </GeneralTableRow>
  );
}

export function ValidatorsTable({ value, nodes }: any) {
  const [state] = useGlobalState();

  console.log(value);

  const validators = nodes;
  const [sortColumn, setSortColumn] = useState<Column>("votingPower");
  const [sortDirection, setSortDirection] = useState<"desc" | "asc">("desc");
  const sortedValidators = getSortedValidators(
    validators.filter((x: any) => value === 'all' ? true : x.isSigner),
    sortColumn,
    sortDirection,
  );

  const columns = value === 'all' ? DEFAULT_COLUMNS : DELEGATORS_COLUMNS;

  return (
    <Table>
      <TableHead>
        <TableRow sx={{verticalAlign: "bottom"}}>
          {columns.map((column) => (
            <ValidatorHeaderCell
              key={column}
              column={column}
              direction={sortColumn === column ? sortDirection : undefined}
              setDirection={setSortDirection}
              setSortColumn={setSortColumn}
            />
          ))}
        </TableRow>
      </TableHead>
      <GeneralTableBody>
        {sortedValidators.map((validator: any, i: number) => {
          return (
            <ValidatorRow key={i} validator={validator} columns={columns} />
          );
        })}
      </GeneralTableBody>
    </Table>
  );
}
