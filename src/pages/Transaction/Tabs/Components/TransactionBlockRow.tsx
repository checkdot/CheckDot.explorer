import * as React from "react";
import ContentRow from "../../../../components/IndividualPageContent/ContentRow";
import {getLearnMoreTooltip} from "../../helpers";
import {Link} from "../../../../routing";

export default function TransactionBlockRow({version}: {version: string}) {
  const data = {
    block_height: 123,
  };

  if (!data) {
    return null;
  }

  return (
    <ContentRow
      title="Block:"
      value={
        <Link to={`/block/${data.block_height}`} underline="none">
          {data.block_height}
        </Link>
      }
      tooltip={getLearnMoreTooltip("block_height")}
    />
  );
}
