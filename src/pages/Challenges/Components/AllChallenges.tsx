import React from "react";
import Box from "@mui/material/Box";
import {useSearchParams} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";
import ChallengesList from "./ChallengesList";

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

type AllChallengesWithPaginationProps = {
  address: string;
  accountData: any;
  numPages: number;
  countPerPage: number;
};

export function AllChallengesWithPagination({
  address,
  accountData,
  numPages,
  countPerPage,
}: AllChallengesWithPaginationProps) {
  const [searchParams] = useSearchParams();
  // const currentPage = parseInt(searchParams.get("page") ?? "1");
  // const offset = (currentPage - 1) * countPerPage;

  return (
    <>
      <Stack spacing={2}>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          { accountData.challenges && <ChallengesList data={accountData.challenges} /> }
        </Box>
        {/* {numPages > 1 && (
          <Box sx={{display: "flex", justifyContent: "center"}}>
            <RenderPagination currentPage={currentPage} numPages={numPages} />
          </Box>
        )} */}
      </Stack>
    </>
  );
}

type AllChallengesProps = {
  address: string;
  accountData: any;
};

export default function AllChallenges({address, accountData}: AllChallengesProps) {
  const txnCount = 100;
  if (txnCount === undefined) {
    return <EmptyTabContent />;
  }

  const countPerPage = 10;
  const numPages = Math.ceil(txnCount / countPerPage);
  return (
    <AllChallengesWithPagination
      address={address}
      accountData={accountData}
      numPages={numPages}
      countPerPage={countPerPage}
    />
  );
}
