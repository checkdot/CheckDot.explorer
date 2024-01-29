import React from "react";
import AccountAllTransactions from "../Components/AccountAllTransactions";

type TransactionsTabProps = {
  address: string;
  accountData: any;
};

export default function TransactionsTab({
  address,
  accountData,
}: TransactionsTabProps) {
  // AccountTransactions: render transactions where the account is the sender
  // AccountAllTransactions: render all transactions where the account is involved

  return <AccountAllTransactions address={address} accountData={accountData} />;
}
