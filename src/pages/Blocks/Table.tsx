import * as React from "react";
import {Table, TableHead, TableRow} from "@mui/material";
import GeneralTableRow from "../../components/Table/GeneralTableRow";
import GeneralTableHeaderCell from "../../components/Table/GeneralTableHeaderCell";
import {assertNever} from "../../utils";
import HashButton, {HashType} from "../../components/HashButton";
import {parseTimestamp} from "../utils";
import moment from "moment";
import GeneralTableBody from "../../components/Table/GeneralTableBody";
import GeneralTableCell from "../../components/Table/GeneralTableCell";
import {Link, useAugmentToWithGlobalSearchParams} from "../../routing";

function getAgeInSeconds(block: any): string {
  const blockTimestamp = parseTimestamp(block.block_timestamp);
  const nowTimestamp = parseTimestamp(moment.now().toString());
  const duration = moment.duration(nowTimestamp.diff(blockTimestamp));
  const durationInSec = duration.asSeconds().toFixed(0);
  return durationInSec;
}

type BlockCellProps = {
  block: any;
};

function BlockHeightCell({block}: BlockCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      <Link
        to={`/block/${block.block_height}`}
        target="_blank"
        underline="none"
      >
        {block.block_height}
      </Link>
    </GeneralTableCell>
  );
}

function BlockAgeCell({block}: BlockCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      {`${getAgeInSeconds(block)}s ago`}
    </GeneralTableCell>
  );
}

function BlockHashCell({block}: BlockCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      <HashButton hash={block.hash} type={HashType.OTHERS} />
    </GeneralTableCell>
  );
}

function TxnCell({block}: BlockCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      {block.txns}
    </GeneralTableCell>
  );
}

function BaseFeeCell({block}: BlockCellProps) {
  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      {`${Number(block.baseFee).toFixed(0)} Gwei`}
    </GeneralTableCell>
  );
}

const BlockCells = Object.freeze({
  height: BlockHeightCell,
  age: BlockAgeCell,
  hash: BlockHashCell,
  txns: TxnCell,
  baseFee: BaseFeeCell,
});

type Column = keyof typeof BlockCells;

const DEFAULT_COLUMNS: Column[] = [
  "height",
  "age",
  "hash",
  "txns",
  "baseFee",
];

type BlockRowProps = {
  block: any;
  columns: Column[];
};

function BlockRow({block, columns}: BlockRowProps) {
  const augmentTo = useAugmentToWithGlobalSearchParams();

  // TODO: remove '_blank' once we have a blocks table with better performance
  const rowClick = () => {
    window.open(augmentTo(`/block/${block.block_height}`));
  };

  return (
    <GeneralTableRow onClick={rowClick}>
      {columns.map((column) => {
        const Cell = BlockCells[column];
        return <Cell key={column} block={block} />;
      })}
    </GeneralTableRow>
  );
}

type BlockHeaderCellProps = {
  column: Column;
};

function BlockHeaderCell({column}: BlockHeaderCellProps) {
  switch (column) {
    case "height":
      return <GeneralTableHeaderCell header="Block" />;
    case "age":
      return <GeneralTableHeaderCell header="Age" />;
    case "hash":
      return <GeneralTableHeaderCell header="Hash" />;
    case "txns":
      return <GeneralTableHeaderCell header="Txns" />;
    case "baseFee":
      return <GeneralTableHeaderCell header="Base Fee" />;
    default:
      return assertNever(column);
  }
}

type BlocksTableProps = {
  blocks: any[];
  columns?: Column[];
};

export default function BlocksTable({
  blocks,
  columns = DEFAULT_COLUMNS,
}: BlocksTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <BlockHeaderCell key={column} column={column} />
          ))}
        </TableRow>
      </TableHead>
      <GeneralTableBody>
        {blocks.map((block: any, i: number) => {
          return <BlockRow key={i} block={block} columns={columns} />;
        })}
      </GeneralTableBody>
    </Table>
  );
}
