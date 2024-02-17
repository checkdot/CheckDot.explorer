import * as React from "react";
import {Box, Stack, Table, Typography, useTheme} from "@mui/material";
import GeneralTableRow from "../../components/Table/GeneralTableRow";
import {parseTimestamp} from "../utils";
import moment from "moment";
import GeneralTableBody from "../../components/Table/GeneralTableBody";
import GeneralTableCell from "../../components/Table/GeneralTableCell";
import {Link, useAugmentToWithGlobalSearchParams} from "../../routing";
import {grey} from "../../themes/colors/colorPalette";
import {ViewAgendaOutlined} from "@mui/icons-material";
import HashButton, {HashType} from "../../components/HashButton";

const momentLatestBlockDisplay = (block: any) => {
  if (block.block_timestamp === undefined) {
    return '...';
  }
  const latestBlock = moment(block.block_timestamp);
  const minutesRemaining = latestBlock.diff(moment(), 'minutes');
  const secondsRemaining = latestBlock.diff(moment(), 'seconds') - (minutesRemaining * 60);

  return `${-minutesRemaining} min(s) ${-secondsRemaining} sec(s) ago`;
}

type BlockCellProps = {
  block: any;
};

function BlockLogoCell() {
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
        <ViewAgendaOutlined
          stroke={theme.palette.mode === "dark" ? grey[600] : grey[300]}
        />
      </Box>
    </GeneralTableCell>
  );
}

function BlockHeightCell({block}: BlockCellProps) {
  const theme = useTheme();

  return (
    <GeneralTableCell sx={{textAlign: "left"}}>
      <Box>
        <Link
          to={`/block/${block.block_height}`}
          target="_blank"
          underline="none"
        >
          {block.block_height}
        </Link>
      </Box>
      <Typography
        color={theme.palette.mode === "dark" ? grey[400] : grey[500]}
        fontSize={12}
      >{`${momentLatestBlockDisplay(block)}`}</Typography>
    </GeneralTableCell>
  );
}

function BlockTxsCell({block}: BlockCellProps) {
  const theme = useTheme();

  return (
    <GeneralTableCell sx={{textAlign: "center"}}>
      <Stack spacing={2.35}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Typography
            fontSize={12}
            color={theme.palette.mode === "dark" ? grey[400] : grey[500]}
            marginRight={1}
          >
            Hash
          </Typography>{" "}
          <HashButton hash={block.hash} type={HashType.BLOCK} margin={"auto"} />
        </Box>
        <Box>
          <Link
            to={`/block/${block.block_height}`}
            target="_blank"
            underline="none"
          >
            {block.txns} txns
          </Link>{" "}
          <Box
            component={"span"}
            color={theme.palette.mode === "dark" ? grey[400] : grey[500]}
          >
          </Box>
        </Box>
      </Stack>
    </GeneralTableCell>
  );
}

function BlockRewardCell({block}: BlockCellProps) {
  const theme = useTheme();

  return (
    <GeneralTableCell title="Rewards">
      <Typography
        width={"fit-content"}
        fontSize={14}
        border={1}
        padding={"2px 4px"}
        borderRadius={0.75}
        marginLeft={"auto"}
        borderColor={theme.palette.mode === "dark" ? grey[500] : grey[400]}
      >
        {block.reward} CDT
      </Typography>
    </GeneralTableCell>
  );
}

const BlockCells = Object.freeze({
  height: BlockHeightCell,
  txs: BlockTxsCell,
  reward: BlockRewardCell,
});

type Column = keyof typeof BlockCells;

const DEFAULT_COLUMNS: Column[] = ["height", "txs", "reward"];

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
      <BlockLogoCell />
      {columns.map((column) => {
        const Cell = BlockCells[column];
        return <Cell key={column} block={block} />;
      })}
    </GeneralTableRow>
  );
}

type BlocksTableProps = {
  blocks: any[];
  columns?: Column[];
};

export default function LatestBlocksTable({
  blocks,
  columns = DEFAULT_COLUMNS,
}: BlocksTableProps) {
  return (
    <Table>
      <GeneralTableBody>
        {blocks.map((block: any, i: number) => {
          return <BlockRow key={i} block={block} columns={columns} />;
        })}
      </GeneralTableBody>
    </Table>
  );
}
