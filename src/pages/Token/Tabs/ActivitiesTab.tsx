import React from "react";
import {ActivitiesTable} from "../Component/ActivitiesTable";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";
import {useSearchParams} from "react-router-dom";
import {Box, Pagination, Stack} from "@mui/material";

const LIMIT = 20;

function RenderPagination({
  currentPage,
  numPages,
}: {
  currentPage: number;
  numPages: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newPageNum: number,
  ) => {
    searchParams.set("page", newPageNum.toString());
    setSearchParams(searchParams);
  };

  return (
    <Pagination
      sx={{mt: 3}}
      count={numPages}
      variant="outlined"
      showFirstButton
      showLastButton
      page={currentPage}
      siblingCount={4}
      boundaryCount={0}
      shape="rounded"
      onChange={handleChange}
    />
  );
}

type TokenActivitiesWithPaginationProps = {
  tokenId: string;
  numPages: number;
};

export function TokenActivitiesWithPagination({
  tokenId,
  numPages,
}: TokenActivitiesWithPaginationProps) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "1");

  const activities = [
    {
      event_account_address: "string",
      event_index: 1,
      from_address:
        "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      property_version_v1: 1,
      to_address:
        "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      token_amount: 1,
      token_data_id: "string",
      token_standard: "string",
      transaction_timestamp: 1111111,
      transaction_version: 1,
      type: "MintEvent",
    },
    {
      event_account_address: "string",
      event_index: 1,
      from_address:
        "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      property_version_v1: 1,
      to_address:
        "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      token_amount: 1,
      token_data_id: "string",
      token_standard: "string",
      transaction_timestamp: 1111111,
      transaction_version: 1,
      type: "MintEvent",
    },
    {
      event_account_address: "string",
      event_index: 1,
      from_address:
        "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      property_version_v1: 1,
      to_address:
        "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      token_amount: 1,
      token_data_id: "string",
      token_standard: "string",
      transaction_timestamp: 1111111,
      transaction_version: 1,
      type: "MintEvent",
    },
  ];

  return (
    <>
      <Stack spacing={2}>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          <ActivitiesTable activities={activities ?? []} />
        </Box>
        {numPages > 1 && (
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <RenderPagination currentPage={currentPage} numPages={numPages} />
          </Box>
        )}
      </Stack>
    </>
  );
}

type ActivitiesTabProps = {
  data: any;
};

export default function ActivitiesTab({
  data: activitiesData,
}: ActivitiesTabProps) {
  const tokenId = activitiesData?.token_data_id;
  const activitiesCount = 5;

  if (activitiesCount === undefined || !tokenId) {
    return <EmptyTabContent />;
  }

  const numPages = Math.ceil(activitiesCount / LIMIT);

  return (
    <TokenActivitiesWithPagination tokenId={tokenId} numPages={numPages} />
  );
}
