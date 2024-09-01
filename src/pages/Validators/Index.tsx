import {Box, Typography} from "@mui/material";
import {useGlobalState} from "../../global-config/GlobalConfig";
import PageHeader from "../layout/PageHeader";
import ValidatorsPageTabs from "./Tabs";
import ValidatorsMap from "./ValidatorsMap";
import {CommissionChangeBanner} from "./CommissionChangeBanner";
import { useNetworkSelector } from "../../global-config/network-selection";
import { useQuery } from "@tanstack/react-query";
import { api_getNetwork } from "../../queries/api";

export default function ValidatorsPage() {
  const [state] = useGlobalState();

  const [selectedNetwork] = useNetworkSelector();
  const currentPage = 0;

  const nodesResult = useQuery({
    queryKey: ["api_getNetwork", currentPage],
    queryFn: async () => {
      const queryResult = await api_getNetwork(selectedNetwork, currentPage, 50);
      return queryResult.result;
    },
  });

  return (
    <Box>
      <PageHeader />
      <Typography variant="h3" marginBottom={2}>
        Validators
      </Typography>
      {/* <CommissionChangeBanner /> */}
      { nodesResult.data && <ValidatorsMap nodes={nodesResult.data} /> }
      { nodesResult.data && <ValidatorsPageTabs nodes={nodesResult.data} /> }
    </Box>
  );
}
