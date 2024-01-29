import React from "react";
import Box from "@mui/material/Box";
import {useSearchParams} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";
import LeaderboardTable from "./LeaderBoardTable";

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

  const data = [
    {
      rank: 1,
      user: "0xf24025eff2f5296136da881334d8432171b84ce5e263372d2b395a1c20ad7b2b",
      completed: 32,
      totalPoints: 120,
    },
    {
      rank: 2,
      user: "0xf24025eff2f5296136da881334d8432171b84ce5e263372d2b395a1c20ad7b2b",
      completed: 32,
      totalPoints: 120,
    },
    {
      rank: 3,
      user: "0xf24025eff2f5296136da881334d8432171b84ce5e263372d2b395a1c20ad7b2b",
      completed: 32,
      totalPoints: 120,
    },
    {
      rank: 4,
      user: "0xf24025eff2f5296136da881334d8432171b84ce5e263372d2b395a1c20ad7b2b",
      completed: 32,
      totalPoints: 120,
    },
    {
      rank: 5,
      user: "0xf24025eff2f5296136da881334d8432171b84ce5e263372d2b395a1c20ad7b2b",
      completed: 32,
      totalPoints: 120,
    },
    {
      rank: 6,
      user: "0xf24025eff2f5296136da881334d8432171b84ce5e263372d2b395a1c20ad7b2b",
      completed: 32,
      totalPoints: 120,
    },
  ];

  return (
    <>
      <Stack spacing={2}>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          <LeaderboardTable data={data} />
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
