import {Box} from "@mui/material";
import React from "react";
import ContentBox from "../../../components/IndividualPageContent/ContentBox";
import ContentRow from "../../../components/IndividualPageContent/ContentRow";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";
import {getLearnMoreTooltip} from "../../Transaction/helpers";

type InfoTabProps = {
  address: string;
  accountData: any;
};

export default function InfoTab({accountData}: InfoTabProps) {
  if (!accountData || Array.isArray(accountData)) {
    return <EmptyTabContent />;
  }

  return (
    <Box marginBottom={3}>
      <ContentBox>
        <ContentRow
          title={"Sequence Number:"}
          value={accountData.nonce}
          tooltip={getLearnMoreTooltip("sequence_number")}
        />
      </ContentBox>
    </Box>
  );
}
