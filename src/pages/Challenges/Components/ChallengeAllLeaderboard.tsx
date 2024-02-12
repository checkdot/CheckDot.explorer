import React from "react";
import Box from "@mui/material/Box";
import {useSearchParams} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";
import LeaderboardTable from "./LeaderboardTable";
import { useQuery } from "@tanstack/react-query";
import { useNetworkSelector } from "../../../global-config/network-selection";
import { api_getChallengesLeaderboard } from "../../../queries/api";

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

type ChallengeAllLeaderboardWithPaginationProps = {
  numPages: number;
  countPerPage: number;
};

export function ChallengeAllLeaderboardWithPagination({
  numPages,
  countPerPage,
}: ChallengeAllLeaderboardWithPaginationProps) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "1");
  const offset = (currentPage - 1) * countPerPage;

  const [network,] = useNetworkSelector();

  const leaderboardQuery = useQuery({
    queryKey: ['api_getChallengesLeaderboard', currentPage],
    queryFn: async () => {
      const responseResult = await api_getChallengesLeaderboard(network, currentPage);
      return responseResult.result;
    }
  });

  return (
    <>
      <Stack spacing={2}>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          { leaderboardQuery.data && (<LeaderboardTable data={leaderboardQuery.data} />) }
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

type ChallengeAllLeaderboardProps = {
  address: string;
};

export default function ChallengeAllLeaderboard({
  address,
}: ChallengeAllLeaderboardProps) {
  const txnCount = 100;
  if (txnCount === undefined) {
    return <EmptyTabContent />;
  }

  const countPerPage = 10;
  const numPages = Math.ceil(txnCount / countPerPage);
  return (
    <ChallengeAllLeaderboardWithPagination
      numPages={numPages}
      countPerPage={countPerPage}
    />
  );
}
