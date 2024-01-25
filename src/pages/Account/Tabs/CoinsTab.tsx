import React from "react";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";
import {CoinsTable} from "../Components/CoinsTable";

type TokenTabsProps = {
  address: string;
  accountData: any;
};

export default function CoinsTab({address}: TokenTabsProps) {
  const loading = false;
  const error = false;
  const data = {
    current_fungible_asset_balances: [
      {
        __typename: "current_fungible_asset_balances",
        amount: 1000000000000000000,
        asset_type: "0x0000000000000000000000000000001",
        metadata: {
          __typename: "fungible_asset_metadata",
          name: "CheckDot Coin",
          decimals: 18,
          symbol: "CDT",
        },
      },
    ],
  };

  if (loading || error) {
    // TODO: error handling
    return null;
  }

  const coins = data?.current_fungible_asset_balances ?? [];

  if (coins.length === 0) {
    return <EmptyTabContent />;
  }

  return <CoinsTable coins={coins} />;
}
