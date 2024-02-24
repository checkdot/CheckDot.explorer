import BlocksTable from "./Table";
import {Box, Pagination, Stack, Typography} from "@mui/material";
import PageHeader from "../layout/PageHeader";
import LoadingModal from "../../components/LoadingModal";
import { BigNumber, ethers } from "ethers";
import { buildBlockFromQueryResult } from "../utils";
import { api_getLatestBlocks } from "../../queries/api";
import { useQuery } from "@tanstack/react-query";
import { useNetworkSelector } from "../../global-config/network-selection";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const BLOCKS_COUNT = 30;

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

export default function BlocksPage() {
  const isLoading = false;

  const [selectedNetwork, _] = useNetworkSelector();

  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") ?? "1");
  const [numPages, setNumPages] = useState(100);

  const lastBlocks = useQuery({
    queryKey: ["api_getLatestBlocks", currentPage],
    queryFn: async () => {
      const queryResult = await api_getLatestBlocks(selectedNetwork, currentPage, 50);
      return queryResult.result
        .map((x: any) => {
          let block = buildBlockFromQueryResult(x, true);

          return {
            block_height: block.block_height,
            block_timestamp: block.timestamp,
            hash: block.hash,
            size: Number(block.gasUsed.mul(BigNumber.from(100)).div(block.gasLimit).toString()) / 100,
            txns: x.transactions.length,
            reward: ethers.utils.formatEther(block.staticReward),
            baseFee: ethers.utils.formatUnits(block.baseFeePerGas, "gwei")
          }
        });
    }
  });

  return (
    <>
      <LoadingModal open={isLoading} />
      <Box>
        <PageHeader />
        <Typography variant="h3" marginBottom={2}>
          Latest Blocks
        </Typography>
        <Stack spacing={2}>
          <Box sx={{width: "auto", overflowX: "auto"}}>
            { lastBlocks.data && <BlocksTable blocks={lastBlocks.data} /> }
          </Box>
          {numPages > 1 && (
            <Box sx={{display: "flex", justifyContent: "center"}}>
              <RenderPagination currentPage={currentPage} numPages={numPages} />
            </Box>
          )}
        </Stack>
      </Box>
    </>
  );
}
