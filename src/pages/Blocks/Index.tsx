import * as React from "react";
import BlocksTable from "./Table";
import {Box, Typography} from "@mui/material";
import PageHeader from "../layout/PageHeader";
import LoadingModal from "../../components/LoadingModal";

const BLOCKS_COUNT = 30;

export default function BlocksPage() {
  const isLoading = false;
  const recentBlocks = [
    {
      block_height: 1,
      block_timestamp: 170612378,
      block_hash:
        "0xa35b523ba1756383de8cb62561c84d87ebbc83bb8c6bc103067bd4978df9928f",
      first_version: 1,
      last_version: 10,
    },
    {
      block_height: 1,
      block_timestamp: 170612378,
      block_hash:
        "0xa35b523ba1756383de8cb62561c84d87ebbc83bb8c6bc103067bd4978df9928f",
      first_version: 1,
      last_version: 10,
    },
    {
      block_height: 1,
      block_timestamp: 170612378,
      block_hash:
        "0xa35b523ba1756383de8cb62561c84d87ebbc83bb8c6bc103067bd4978df9928f",
      first_version: 1,
      last_version: 10,
    },
    {
      block_height: 1,
      block_timestamp: 170612378,
      block_hash:
        "0xa35b523ba1756383de8cb62561c84d87ebbc83bb8c6bc103067bd4978df9928f",
      first_version: 1,
      last_version: 10,
    },
  ];

  return (
    <>
      <LoadingModal open={isLoading} />
      <Box>
        <PageHeader />
        <Typography variant="h3" marginBottom={2}>
          Latest Blocks
        </Typography>
        <BlocksTable blocks={recentBlocks} />
      </Box>
    </>
  );
}
