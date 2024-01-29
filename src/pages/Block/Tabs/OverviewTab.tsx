import {Box} from "@mui/material";
import React from "react";
import HashButton, {HashType} from "../../../components/HashButton";
import ContentBox from "../../../components/IndividualPageContent/ContentBox";
import ContentRow from "../../../components/IndividualPageContent/ContentRow";
import TimestampValue from "../../../components/IndividualPageContent/ContentValue/TimestampValue";
import {Link} from "../../../routing";
import {getLearnMoreTooltip} from "../../Transaction/helpers";
import { ethers } from "ethers";

function BlockMetadataRows({blockTxn}: {blockTxn: any | undefined}) {
  if (!blockTxn) {
    return null;
  }

  return (
    <>
      <ContentRow
        title="Proposer:"
        value={<HashButton hash={blockTxn.proposer} type={HashType.ACCOUNT} />}
        tooltip={getLearnMoreTooltip("proposer")}
      />
    </>
  );
}

type OverviewTabProps = {
  data: any;
};

export default function OverviewTab({data}: OverviewTabProps) {
  const blockTxn: any = data;

  return (
    <Box marginBottom={3}>
      <ContentBox>
        {/* <ContentRow
          title={"Hash:"}
          value={data.hash}
          tooltip={getLearnMoreTooltip("block_hash")}
        /> */}
        <ContentRow
          title="Hash:"
          value={<HashButton hash={blockTxn.hash} type={HashType.BLOCK} />}
          tooltip={getLearnMoreTooltip("block_hash")}
        />
        <ContentRow
          title={"Block Height:"}
          value={data.block_height}
          tooltip={getLearnMoreTooltip("block_height")}
        />
        {"timestamp" in data && (<ContentRow
          title={"Timestamp:"}
          value={<TimestampValue timestamp={data.timestamp} />}
          tooltip={getLearnMoreTooltip("timestamp")}
        />)}
        <BlockMetadataRows blockTxn={blockTxn} />
        <ContentRow
          title={"Transactions:"}
          value={`${data.transactions.length} transaction${data.transactions.length > 1 ? 's' : ''} in this block`}
          tooltip={getLearnMoreTooltip("transactionsCount")}
        />
      </ContentBox>
      <ContentBox>
        <ContentRow
          title={"Block Reward:"}
          value={undefined}
          tooltip={getLearnMoreTooltip("block_reward")}
        />
        <ContentRow
          title={"Total Difficulty:"}
          value={data.difficulty}
          tooltip={getLearnMoreTooltip("block_difficulty")}
        />
        <ContentRow
          title={"Size:"}
          value={`${data.gasUsed} (${(data.gasUsed * 100 / data.gasLimit).toFixed(2)}%)`}
          tooltip={getLearnMoreTooltip("block_size")}
        />
        <ContentRow
          title={"Gas Limit:"}
          value={`${data.gasLimit}`}
          tooltip={getLearnMoreTooltip("block_size")}
        />
        <ContentRow
          title={"Base Fee Per Gas:"}
          value={`${ethers.utils.formatEther(ethers.BigNumber.from(data.baseFeePerGas))} CDT (${ethers.utils.formatUnits(ethers.BigNumber.from(data.baseFeePerGas), 'gwei')} Gwei)`}
          tooltip={getLearnMoreTooltip("block_baseFeePerGas")}
        />
        <ContentRow
          title={"Burnt Fees:"}
          value={`${ethers.utils.formatEther(ethers.BigNumber.from(data.baseFeePerGas).mul(ethers.BigNumber.from(data.gasUsed)))} CDT`}
          tooltip={getLearnMoreTooltip("block_burntFees")}
        />
      </ContentBox>
    </Box>
  );
}
