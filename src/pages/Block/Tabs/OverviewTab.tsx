import {Box} from "@mui/material";
import React from "react";
import HashButton, {HashType} from "../../../components/HashButton";
import ContentBox from "../../../components/IndividualPageContent/ContentBox";
import ContentRow from "../../../components/IndividualPageContent/ContentRow";
import TimestampValue from "../../../components/IndividualPageContent/ContentValue/TimestampValue";
import {Link} from "../../../routing";
import {getLearnMoreTooltip} from "../../Transaction/helpers";

function VersionValue({data}: {data: any}) {
  const {first_version, last_version} = data;
  return (
    <>
      <Link to={`/txn/${first_version}`} underline="none">
        {first_version}
      </Link>
      {" - "}
      <Link to={`/txn/${last_version}`} underline="none">
        {last_version}
      </Link>
    </>
  );
}

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
      <ContentRow
        title="Epoch:"
        value={blockTxn.epoch}
        tooltip={getLearnMoreTooltip("epoch")}
      />
      <ContentRow
        title="Round:"
        value={blockTxn.round}
        tooltip={getLearnMoreTooltip("round")}
      />
    </>
  );
}

type OverviewTabProps = {
  data: any;
};

export default function OverviewTab({data}: OverviewTabProps) {
  const blockTxn: any = data.transactions?.[0];

  return (
    <Box marginBottom={3}>
      <ContentBox>
        <ContentRow
          title={"Block Height:"}
          value={data.block_height}
          tooltip={getLearnMoreTooltip("block_height")}
        />
        <ContentRow
          title={"Version:"}
          value={<VersionValue data={data} />}
          tooltip={getLearnMoreTooltip("version")}
        />
        <ContentRow
          title={"Timestamp:"}
          value={<TimestampValue timestamp={data.block_timestamp} />}
          tooltip={getLearnMoreTooltip("timestamp")}
        />
        <BlockMetadataRows blockTxn={blockTxn} />
      </ContentBox>
    </Box>
  );
}