export type TransactionCounterparty = {
  address: string;
  role: "receiver" | "smartContract";
};

export type TransactionAmount = {
  amountInvolved: bigint;
  balanceChanges: BalanceChange[];
};

export type BalanceChange = {
  address: string;
  amount: bigint;
  amountAfter: string;
};
