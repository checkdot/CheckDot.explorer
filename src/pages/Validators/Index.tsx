import {Box, Typography} from "@mui/material";
import {useGlobalState} from "../../global-config/GlobalConfig";
import PageHeader from "../layout/PageHeader";
import ValidatorsPageTabs from "./Tabs";
import ValidatorsMap from "./ValidatorsMap";
import {CommissionChangeBanner} from "./CommissionChangeBanner";

export default function ValidatorsPage() {
  const [state] = useGlobalState();

  return (
    <Box>
      <PageHeader />
      <Typography variant="h3" marginBottom={2}>
        Validators
      </Typography>
      <CommissionChangeBanner />
      <ValidatorsMap />
      <ValidatorsPageTabs />
    </Box>
  );
}
