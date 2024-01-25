import React from "react";
import Box from "@mui/material/Box";
import {useSearchParams} from "react-router-dom";
import {Pagination, Stack} from "@mui/material";
import {UserTransactionsTable} from "../../Transactions/TransactionsTable";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";

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

type AccountAllTransactionsWithPaginationProps = {
  address: string;
  numPages: number;
  countPerPage: number;
};

export function AccountAllTransactionsWithPagination({
  address,
  numPages,
  countPerPage,
}: AccountAllTransactionsWithPaginationProps) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "1");
  const offset = (currentPage - 1) * countPerPage;

  const versions = [
    418641549, 418522754, 418390449, 418166769, 418038540, 417912329, 417793307,
  ];

  return (
    <>
      <Stack spacing={2}>
        <Box sx={{width: "auto", overflowX: "auto"}}>
          <UserTransactionsTable versions={versions} address={address} />
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

type AccountAllTransactionsProps = {
  address: string;
};

export default function AccountAllTransactions({
  address,
}: AccountAllTransactionsProps) {
  const txnCount = 3;
  if (txnCount === undefined) {
    return <EmptyTabContent />;
  }

  const countPerPage = 25;
  const numPages = Math.ceil(txnCount / countPerPage);

  return (
    <AccountAllTransactionsWithPagination
      address={address}
      numPages={numPages}
      countPerPage={countPerPage}
    />
  );
}
