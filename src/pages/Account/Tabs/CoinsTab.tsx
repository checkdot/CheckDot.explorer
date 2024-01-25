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
        amount: 10156575845,
        asset_type: "0x1::aptos_coin::AptosCoin",
        metadata: {
          __typename: "fungible_asset_metadata",
          name: "Aptos Coin",
          decimals: 8,
          symbol: "APT",
        },
      },
      {
        __typename: "current_fungible_asset_balances",
        amount: 1000000,
        asset_type:
          "0x5e156f1207d0ebfa19a9eeff00d62a282278fb8719f4fab3a586a0a2c0fffbea::coin::T",
        metadata: {
          __typename: "fungible_asset_metadata",
          name: "USD Coin",
          decimals: 6,
          symbol: "USDC",
        },
      },
      {
        __typename: "current_fungible_asset_balances",
        amount: 160000000000,
        asset_type:
          "0xbbc4a9af0e7fa8885bda5db08028e7b882f2c2bba1e0fedbad1d8316f73f8b2f::Questseess::Questsee",
        metadata: {
          __typename: "fungible_asset_metadata",
          name: "⭐ AptosQuest.com",
          decimals: 8,
          symbol: "GIFT",
        },
      },
      {
        __typename: "current_fungible_asset_balances",
        amount: 9,
        asset_type:
          "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
        metadata: {
          __typename: "fungible_asset_metadata",
          name: "USD Coin",
          decimals: 6,
          symbol: "USDC",
        },
      },
      {
        __typename: "current_fungible_asset_balances",
        amount: 3724000000,
        asset_type:
          "0xf658475dc67a4d48295dbcea6de1dc3c9af64c1c80d4161284df369be941dafb::moon_coin::MoonCoin",
        metadata: {
          __typename: "fungible_asset_metadata",
          name: "ClaimAPTGift.com",
          decimals: 6,
          symbol: "aGift.site",
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
