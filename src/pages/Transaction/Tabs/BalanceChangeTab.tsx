import React from "react";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";
import {CoinBalanceChangeTable} from "./Components/CoinBalanceChangeTable";

type BalanceChangeTabProps = {
  transaction: any;
};

export default function BalanceChangeTab({transaction}: BalanceChangeTabProps) {
  const balanceChanges: any = [];

  if (balanceChanges.length === 0) {
    return <EmptyTabContent />;
  }

  return (
    <CoinBalanceChangeTable
      balanceChanges={balanceChanges}
      transaction={transaction}
    />
  );
}
