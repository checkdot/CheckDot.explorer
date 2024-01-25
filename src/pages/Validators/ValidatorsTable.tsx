import React, {useState} from "react";
import {Box, Stack, Table, TableHead, TableRow} from "@mui/material";
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
    case "votingPower":
      return validatorsCopy.sort(
        (validator1, validator2) =>
          parseInt(validator2.voting_power) - parseInt(validator1.voting_power),
      );
    case "rewardsPerf":
      return validatorsCopy.sort(
        (validator1, validator2) =>
          (validator2.rewards_growth ?? 0) - (validator1.rewards_growth ?? 0),
      );
    case "lastEpochPerf":
      return validatorsCopy.sort(
        (validator1, validator2) =>
          parseInt(validator2.last_epoch_performance ?? "") -
          parseInt(validator1.last_epoch_performance ?? ""),
      );
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
      return <GeneralTableHeaderCell header="Staking Pool Address" />;
    case "operatorAddr":
      return <GeneralTableHeaderCell header="Operator Address" />;
    case "votingPower":
      return (
        <SortableHeaderCell
          header="Voting Power"
          column={column}
          direction={direction}
          setDirection={setDirection}
          setSortColumn={setSortColumn}
        />
      );
    case "rewardsPerf":
      return (
        <SortableHeaderCell
          header="Rewards Perf"
          column={column}
          direction={direction}
          setDirection={setDirection}
          setSortColumn={setSortColumn}
          tooltip={<RewardsPerformanceTooltip />}
        />
      );
    case "lastEpochPerf":
      return (
        <SortableHeaderCell
          header="Last Epoch Perf"
          column={column}
          direction={direction}
          setDirection={setDirection}
          setSortColumn={setSortColumn}
          tooltip={<LastEpochPerformanceTooltip />}
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
      <HashButton hash={validator.owner_address} type={HashType.ACCOUNT} />
    </GeneralTableCell>
  );
}

export function OperatorAddrCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      <HashButton
        hash={validator.operator_address}
        type={HashType.ACCOUNT}
        isValidator
      />
    </GeneralTableCell>
  );
}

function VotingPowerCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "right"}}>
      {validator.voting_power.toString()}
    </GeneralTableCell>
  );
}

export function RewardsPerformanceCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left", paddingRight: 5}}>
      {validator.rewards_growth === undefined ? null : (
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          justifyContent="flex-end"
        >
          <Box>{`${validator.rewards_growth.toFixed(2)} %`}</Box>
        </Stack>
      )}
    </GeneralTableCell>
  );
}

function LastEpochPerformanceCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "right", paddingRight: 5}}>
      {validator.last_epoch_performance}
    </GeneralTableCell>
  );
}

function LocationCell({validator}: ValidatorCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "right"}}>
      {validator.location_stats?.city && validator.location_stats?.country
        ? `${validator.location_stats?.city}, ${validator.location_stats?.country}`
        : "-"}
    </GeneralTableCell>
  );
}

const ValidatorCells = Object.freeze({
  addr: ValidatorAddrCell,
  operatorAddr: OperatorAddrCell,
  votingPower: VotingPowerCell,
  rewardsPerf: RewardsPerformanceCell,
  lastEpochPerf: LastEpochPerformanceCell,
  location: LocationCell,
});

type Column = keyof typeof ValidatorCells;

const DEFAULT_COLUMNS: Column[] = [
  "addr",
  "operatorAddr",
  "votingPower",
  "rewardsPerf",
  "lastEpochPerf",
  "location",
];

const PREVIEWNET_COLUMNS: Column[] = [
  "addr",
  "operatorAddr",
  "votingPower",
  "rewardsPerf",
  "lastEpochPerf",
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

export function ValidatorsTable() {
  const [state] = useGlobalState();

  const validators = [
    {
      owner_address:
        "0xa4a00989d8ecc6d116b2283503f58de94d7fc33fff9e28010868abeb70d7d051",
      operator_address:
        "0x610b255ee63f88cce22c38d8a9bc2c0048bce495b9e58d051bfc473c99b01ecb",
      rewards_growth: 100,
      last_epoch: 5646,
      last_epoch_performance: "552/552",
      liveness: 0,
      governance_voting_record: "28 / 39",
      location_stats: {
        peer_id:
          "a4a00989d8ecc6d116b2283503f58de94d7fc33fff9e28010868abeb70d7d051",
        epoch: 5646,
        country: "United States",
        region: "Americas",
        city: "Ashburn",
        latitude: 39.0437,
        longitude: -77.4875,
      },
      apt_rewards_distributed: 454157.35952903,
      voting_power: "1535139787299558",
    },
    {
      owner_address:
        "0xc32f662cd9718f02d8a8e5628f8f642fa27cd9b5f457b406ed734901a4939e34",
      operator_address:
        "0x201cf09644cd5d88aa6db2d1670011325eea2c3198ddfd0c1aa549be0003bb24",
      rewards_growth: 100,
      last_epoch: 5646,
      last_epoch_performance: "650/650",
      liveness: 100,
      governance_voting_record: "52 / 39",
      location_stats: {
        peer_id:
          "c32f662cd9718f02d8a8e5628f8f642fa27cd9b5f457b406ed734901a4939e34",
        epoch: 5646,
        country: null,
        region: "Remote",
        city: null,
        latitude: null,
        longitude: null,
      },
      apt_rewards_distributed: 1830516.62193211,
      voting_power: "1938896417394804",
    },
    {
      owner_address:
        "0xb4a4f1ef8b0702d85547dc444571a473f736e1205a86db36dad13815ad9bbbf6",
      operator_address:
        "0xfc7373db85bc9afb9288ab86b60c22521c651444c28e144784ad53ed0daa0be7",
      rewards_growth: 100,
      last_epoch: 5646,
      last_epoch_performance: "530/530",
      liveness: 100,
      governance_voting_record: "65 / 39",
      location_stats: {
        peer_id:
          "b4a4f1ef8b0702d85547dc444571a473f736e1205a86db36dad13815ad9bbbf6",
        epoch: 5646,
        country: "France",
        region: "Western_Europe",
        city: "Strasbourg",
        latitude: 48.5839,
        longitude: 7.7455,
      },
      apt_rewards_distributed: 1842052.97467544,
      voting_power: "1537085235808505",
    },
    {
      owner_address:
        "0xae139fd4e266beb28925227dcd220d89348117680e48d4aa20685ae102ae2a13",
      operator_address:
        "0xac8fcf0fd851f9226275616c02daada5d5666938ae94b6be7c7e9cc4786ed8fa",
      rewards_growth: 100,
      last_epoch: null,
      last_epoch_performance: null,
      liveness: 100,
      governance_voting_record: "35 / 39",
      location_stats: {
        peer_id:
          "ae139fd4e266beb28925227dcd220d89348117680e48d4aa20685ae102ae2a13",
        epoch: 3976,
        country: "Japan",
        region: "Remote",
        city: "Tokyo",
        latitude: 35.6895,
        longitude: 139.6917,
      },
      apt_rewards_distributed: 1384737.35355085,
      voting_power: "0",
    },
    {
      owner_address:
        "0xb5064f2e6d2d4887c836c8cbd90d23a75cd7afd4530e4a82f06bf528abcb30d6",
      operator_address:
        "0x807245a345c68c701f46e0dee6e5f62a77959c512651be9eeee1169aab9beeff",
      rewards_growth: 100,
      last_epoch: null,
      last_epoch_performance: null,
      liveness: 100,
      governance_voting_record: "35 / 39",
      location_stats: {
        peer_id:
          "b5064f2e6d2d4887c836c8cbd90d23a75cd7afd4530e4a82f06bf528abcb30d6",
        epoch: 3975,
        country: "Germany",
        region: "Western_Europe",
        city: "Frankfurt am Main",
        latitude: 50.1155,
        longitude: 8.6842,
      },
      apt_rewards_distributed: 1384684.49509169,
      voting_power: "0",
    },
  ];

  const [sortColumn, setSortColumn] = useState<Column>("votingPower");
  const [sortDirection, setSortDirection] = useState<"desc" | "asc">("desc");
  const sortedValidators = getSortedValidators(
    validators,
    sortColumn,
    sortDirection,
  );

  const columns = DEFAULT_COLUMNS;

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
