import React from "react";
import TransactionsTable from "../../Transactions/TransactionsTable";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";

type TransactionsTabProps = {
  data: any;
};

export default function TransactionsTab({data}: TransactionsTabProps) {
  const transactions = data.transactions;
  if (transactions.length === 0) {
    return <EmptyTabContent />;
  }

  return <TransactionsTable transactions={transactions} />;
}
