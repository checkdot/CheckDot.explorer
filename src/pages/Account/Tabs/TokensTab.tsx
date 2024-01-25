import React from "react";
import {TokensTable} from "../Components/TokensTable";
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

type AccountTokensWithPaginationProps = {
  address: string;
  numPages: number;
};

export function AccountTokensWithPagination({
  address,
  numPages,
}: AccountTokensWithPaginationProps) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "1");
  const offset = (currentPage - 1) * LIMIT;

  const tokens = [
    {
      token_standard: "v2",
      token_properties_mutated_v1: null,
      token_data_id:
        "0x081a8609b158b0f73706c8cceab872d8e6217bbdb400f97729f47149cf9aaa1d",
      table_type_v1: null,
      storage_id:
        "0x081a8609b158b0f73706c8cceab872d8e6217bbdb400f97729f47149cf9aaa1d",
      property_version_v1: 0,
      owner_address:
        "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
      last_transaction_version: 409844266,
      last_transaction_timestamp: "2024-01-18T09:08:56.622233",
      is_soulbound_v2: false,
      is_fungible_v2: false,
      amount: 1,
      current_token_data: {
        collection_id:
          "0xecf97800f041b63748e636df6f5740c3ac76f14bd67478b1fd5bcf666c6a72d2",
        description: "",
        is_fungible_v2: false,
        largest_property_version_v1: null,
        last_transaction_timestamp: "2024-01-18T09:08:56.622233",
        last_transaction_version: 409844266,
        maximum: null,
        supply: 0,
        token_data_id:
          "0x081a8609b158b0f73706c8cceab872d8e6217bbdb400f97729f47149cf9aaa1d",
        token_name: "ELONMUSK #1092394",
        token_properties: {
          amt: "1",
          tick: "ELONMUSK",
        },
        token_standard: "v2",
        token_uri: "https://img.apt-20.com/?tick=ELONMUSK&amt=1",
        current_collection: {
          collection_id:
            "0xecf97800f041b63748e636df6f5740c3ac76f14bd67478b1fd5bcf666c6a72d2",
          collection_name: "ELONMUSK",
          creator_address:
            "0xadeb45c274f9f4f535afe8957a8cf9ffecbd2b79026fba6c207111136d963f14",
          current_supply: 600,
          description: "",
          last_transaction_timestamp: "2024-01-23T14:42:46.50945",
          last_transaction_version: 416776930,
          max_supply: null,
          mutable_description: null,
          mutable_uri: null,
          table_handle_v1: null,
          token_standard: "v2",
          total_minted_v2: 1424,
          uri: "https://img.apt-20.com/?tick=ELONMUSK",
        },
      },
    },
  ];

  return (
    <>
      <Stack spacing={2}>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          <TokensTable tokens={tokens ?? []} />
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

type TokenTabsProps = {
  address: string;
  accountData: any;
};

export default function TokenTabs({address}: TokenTabsProps) {
  const tokenCount = 1;

  if (tokenCount === undefined) {
    return <EmptyTabContent />;
  }

  const numPages = Math.ceil(tokenCount / LIMIT);
  return <AccountTokensWithPagination address={address} numPages={numPages} />;
}
