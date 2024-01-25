import {useParams} from "react-router-dom";
import {Grid} from "@mui/material";
import React from "react";
import AccountTabs, {TabValue} from "./Tabs";
import AccountTitle from "./Title";
import BalanceCard from "./BalanceCard";
import PageHeader from "../layout/PageHeader";
import LoadingModal from "../../components/LoadingModal";
import Error from "./Error";
import {useGlobalState} from "../../global-config/GlobalConfig";

const TAB_VALUES_FULL: TabValue[] = [
  "transactions",
  "coins",
  "tokens",
  "resources",
  "modules",
  "info",
];

export default function AccountPage() {
  const address = useParams().address ?? "";

  const error = false;
  const isLoading = false;
  const data = {
    sequence_number: "0",
    authentication_key:
      "0x0000000000000000000000000000000000000000000000000000000000000000",
  };
  const [state] = useGlobalState();

  // TODO: [BE] instead of passing down address as props, use context
  // make sure that addresses will always start with "0X"
  const addressHex = address.startsWith("0x") ? address : "0x" + address;

  let tabValues = TAB_VALUES_FULL;

  return (
    <Grid container spacing={1}>
      <LoadingModal open={isLoading} />
      <Grid item xs={12} md={12} lg={12}>
        <PageHeader />
      </Grid>
      <Grid item xs={12} md={8} lg={9} alignSelf="center">
        <AccountTitle address={addressHex} />
      </Grid>
      <Grid item xs={12} md={4} lg={3} marginTop={{md: 0, xs: 2}}>
        <BalanceCard address={addressHex} />
      </Grid>
      <Grid item xs={12} md={12} lg={12} marginTop={4}>
        {error ? (
          <Error address={addressHex} error={error} />
        ) : (
          <AccountTabs
            address={addressHex}
            accountData={data}
            tabValues={tabValues}
          />
        )}
      </Grid>
    </Grid>
  );
}
