import * as React from "react";
import ContentRow from "../../../../components/IndividualPageContent/ContentRow";
import {getLearnMoreTooltip} from "../../helpers";
import {Link} from "../../../../routing";
import { ethers } from "ethers";

export default function TransactionBlockRow({transaction} : any) {

  const blockNumber = transaction.blockNumber && transaction.success !== undefined ? ethers.BigNumber.from(transaction.blockNumber).toString() : undefined;

  return (
    <ContentRow
      title="Block:"
      value={
        blockNumber !== undefined ? (<Link to={`/block/${blockNumber}`} underline="none">
          {blockNumber}
        </Link>) : undefined
      }
      tooltip={getLearnMoreTooltip("block_height")}
    />
  );
}
