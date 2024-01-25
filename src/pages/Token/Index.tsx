import {useParams} from "react-router-dom";
import {Stack, Grid} from "@mui/material";
import TokenTitle from "./Title";
import TokenTabs from "./Tabs";
import PageHeader from "../layout/PageHeader";
import EmptyTabContent from "../../components/IndividualPageContent/EmptyTabContent";

export default function TokenPage() {
  const {tokenId} = useParams();

  const token = {
    token_name: "TOKEN #1092394",
    token_data_id: 1,
    current_collection: {
      collection_name: "TOKEN",
      creator_address:
        "0xadeb45c274f9f4f535afe8957a8cf9ffecbd2b79026fba6c207111136d963f14",
      current_supply: 100,
      max_supply: 300,
    },
    token_uri: "https://img.apt-20.com/?tick=ELONMUSK&amt=1",
    token_properties: {
      amt: "1",
      tick: "ELONMUSK",
    },
  };

  if (!token) {
    return <EmptyTabContent />;
  }

  return (
    <Grid container spacing={1}>
      <PageHeader />
      <Grid item xs={12}>
        <Stack direction="column" spacing={4} marginTop={2}>
          <TokenTitle name={token?.token_name} />
          <TokenTabs data={token} />
        </Stack>
      </Grid>
    </Grid>
  );
}
