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
  numPages: number;
  countPerPage: number;
};

export function AllChallengesWithPagination({
  numPages,
  countPerPage,
}: AllChallengesWithPaginationProps) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "1");
  const offset = (currentPage - 1) * countPerPage;

  const data = [
    {
      image: "",
      title: "Mint the nft on the testnet",
      points: 32,
      validated: true,
    },
    {
      image: "",
      title: "Mint the nft on the testnet",
      points: 32,
    },
    {
      image: "",
      title: "Mint the nft on the testnet",
      points: 32,
    },
    {
      image: "",
      title: "Mint the nft on the testnet",
      points: 32,
    },
    {
      image: "",
      title: "Visit the homepage",
      points: 2,
      validated: true,
    },
    {
      image: "",
      title: "Deploy the contract",
      points: 32,
      validated: true,
    },
  ];

  return (
    <>
      <Stack spacing={2}>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          <ChallengesList data={data} />
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

type AllChallengesProps = {
  address: string;
};

export default function AllChallenges({address}: AllChallengesProps) {
  const txnCount = 100;
  if (txnCount === undefined) {
    return <EmptyTabContent />;
  }

  const countPerPage = 10;
  const numPages = Math.ceil(txnCount / countPerPage);
  return (
    <AllChallengesWithPagination
      numPages={numPages}
      countPerPage={countPerPage}
    />
  );
}
