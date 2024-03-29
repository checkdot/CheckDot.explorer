import { ethers } from "ethers";
import moment from "moment";

function ensureMillisecondTimestamp(timestamp: string): number {
  /*
  Could be: 1646458457
        or: 1646440953658538
   */
  if (timestamp.length > 13) {
    timestamp = timestamp.slice(0, 13);
  }
  if (timestamp.length == 10) {
    timestamp = timestamp + "000";
  }
  return parseInt(timestamp);
}

export function parseTimestamp(timestamp: string): moment.Moment {
  return moment(ensureMillisecondTimestamp(timestamp));
}

export interface TimestampDisplay {
  formatted: string;
  local_formatted: string;
  local_formatted_short: string;
}

export function timestampDisplay(timestamp: moment.Moment): TimestampDisplay {
  return {
    formatted: timestamp.format("MM/DD/YY HH:mm:ss [UTC]"),
    local_formatted: timestamp.local().format("MM/DD/YYYY HH:mm:ss"),
    local_formatted_short: timestamp.local().format("MM/DD/YY HH:mm"),
  };
}

function truncate(
  str: string,
  frontLen: number,
  backLen: number,
  truncateStr: string,
) {
  if (!str) {
    return "";
  }

  if (!Number.isInteger(frontLen) || !Number.isInteger(backLen)) {
    throw `${frontLen} and ${backLen} should be an Integer`;
  }

  const strLen = str.length;
  // Setting default values
  frontLen = frontLen;
  backLen = backLen;
  truncateStr = truncateStr || "…";
  if (
    (frontLen === 0 && backLen === 0) ||
    frontLen >= strLen ||
    backLen >= strLen ||
    frontLen + backLen >= strLen
  ) {
    return str;
  } else if (backLen === 0) {
    return str.slice(0, frontLen) + truncateStr;
  } else {
    return str.slice(0, frontLen) + truncateStr + str.slice(strLen - backLen);
  }
}

export function truncateAddress(accountAddress: string) {
  return truncate(accountAddress, 6, 4, "…");
}

export function truncateAddressMiddle(accountAddress: string) {
  return truncate(accountAddress, 20, 20, "…");
}

export function isValidAccountAddress(accountAddr: string): boolean {
  // account address is 0x{64 hex characters}
  // with multiple options - 0X, 0x001, 0x1, 0x01
  // can start with that and see if any fails to parsing
  return /^(0[xX])?[a-fA-F0-9]{1,64}$/.test(accountAddr);
}

export function isValidTxnHashOrVersion(txnHashOrVersion: string): boolean {
  return isHex(txnHashOrVersion) || isNumeric(txnHashOrVersion);
}

export function isHex(text: string) {
  // if it's hex, and is <= (64 + 2 for 0x) char long
  return text.startsWith("0x") && text.length <= 66;
}

export function isNumeric(text: string) {
  return /^-?\d+$/.test(text);
}

export function getFormattedTimestamp(timestamp?: string): string {
  if (!timestamp || timestamp === "0") return "-";

  const moment = parseTimestamp(timestamp);
  const timestamp_display = timestampDisplay(moment);

  return timestamp_display.local_formatted;
}

export function getTableFormattedTimestamp(timestamp?: string): string {
  if (!timestamp || timestamp === "0") return "-";

  const moment = parseTimestamp(timestamp);
  const timestamp_display = timestampDisplay(moment);

  return timestamp_display.local_formatted;
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

export const buildTransactionFromQueryResult = (result: any) => {
  const tx: any = result;
  const parsedTx = ethers.utils.parseTransaction(tx.raw);

  const status = Number(ethers.BigNumber.from(tx.status).toString());

  return {
    version: '1',
    hash: tx.transactionHash,
    blockNumber: tx.blockNumber,
    sequence_number: parsedTx.nonce,//tx.transactionIndex ? Number(ethers.BigNumber.from(tx.transactionIndex).toString()) : 0,
    type: "user_transaction",
    counterparty: {
      role: "receiver",
      address: tx.to,
    },
    success: status === 1 ? true : status === 2 ? false : undefined,
    sender: tx.from,
    receiver: tx.to,
    payload: {
      type: tx.type,
      data: parsedTx.data
    },
    amount: ethers.utils.formatEther(parsedTx.value),
    expiration_timestamp_secs: 1706106324,
    timestamp: tx.blockTimestamp ? tx.blockTimestamp * 1000 : undefined,//1706106026491801,
    gas_used: tx.gasUsed ? ethers.utils.formatEther(ethers.BigNumber.from(tx.gasUsed).mul(ethers.BigNumber.from(tx.effectiveGasPrice))) : undefined,
    gas_unit_price: tx.effectiveGasPrice ? ethers.utils.formatEther(ethers.BigNumber.from(tx.effectiveGasPrice)) : undefined,
    gas_fee: tx.effectivePriorityFee ? ethers.utils.formatEther(ethers.BigNumber.from(tx.gasUsed).mul(ethers.BigNumber.from(tx.effectivePriorityFee))) : undefined,
    signature: {
      r: parsedTx.r,
      s: parsedTx.s,
      v: parsedTx.v
    },
    events: [],
    status: Number(ethers.BigNumber.from(tx.status).toString())
  };
}

export const buildBlockFromQueryResult = (result: any, ignoreTransactions: boolean = false) => {
  const block: any = result;

  return {
    hash: block.hash,
    block_height: Number(ethers.BigNumber.from(block.number).toString()),
    timestamp: block.timestamp * 1000,
    proposer: block.miner,
    difficulty: ethers.BigNumber.from(block.difficulty),
    gasUsed: ethers.BigNumber.from(block.gasUsed),
    gasLimit: ethers.BigNumber.from(block.gasLimit),
    baseFeePerGas: ethers.BigNumber.from(block.baseFeePerGas),
    staticReward: ethers.BigNumber.from(block.staticReward),
    transactionFees: ethers.BigNumber.from(block.transactionFees),
    totalSupply: ethers.BigNumber.from(block.totalSupply),
    transactions: ignoreTransactions ? [] : block.transactions.map((x: any) => buildTransactionFromQueryResult(x)),
  };
}

export const buildAccountFromQueryResult = (result: any) => {
  const account: any = result;

  return {
    address: account.address,
    nonce: Number(ethers.BigNumber.from(account.nonce).toString()),
    balance: ethers.utils.formatEther(ethers.BigNumber.from(account.balance)),
    transactions: account.transactions.map((x: any) => buildTransactionFromQueryResult(x)),
    challenges: result.challenges ?? []
  };
}

export const functionNames: any = {
  '0x2': "Transfer",
  '0x1': 'Not supported',
  '0x0': 'Legacy Transfer'
};