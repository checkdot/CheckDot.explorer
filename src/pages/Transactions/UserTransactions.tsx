import React, { useState } from "react";
import Box from "@mui/material/Box";
import {useSearchParams} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";
import {UserTransactionsTable} from "../Transactions/TransactionsTable";
import { useNetworkSelector } from "../../global-config/network-selection";
import { useQuery } from "@tanstack/react-query";
import { api_getLatestTransactions } from "../../queries/api";
import { buildTransactionFromQueryResult } from "../utils";

const NUM_PAGES = 100;

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

export default function UserTransactions() {
  
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "1");
  const [numPages, setNumPages] = useState(100);

  const [selectedNetwork] = useNetworkSelector();

  const lastTransactions = useQuery({
    queryKey: ["api_getLatestTransactions", currentPage],
    queryFn: async () => {
      const queryResult = await api_getLatestTransactions(selectedNetwork, currentPage, 50);
      return queryResult.result
        .map((x: any) => buildTransactionFromQueryResult(x));
    },
  });

  return (
    <>
      <Stack spacing={2}>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          { lastTransactions.data && <UserTransactionsTable transactions={lastTransactions.data} /> }
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
