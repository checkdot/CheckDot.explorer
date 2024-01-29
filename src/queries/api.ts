import { NetworkKey, networksURLS } from "../constants";
import { useNetworkSelector } from "../global-config/network-selection";

export const api_getLatestTransactions = async (selectedNetwork: NetworkKey) => {
    return request<any>(
        `${networksURLS[selectedNetwork]}`,
        "api_getLatestTransactions",
        "POST",
        {"jsonrpc":"2.0","method":"api_getLatestTransactions","params": [],"id":1}
    );
  }

export const api_getTransactionReceipt = async (selectedNetwork: NetworkKey, hash: string) => {
    return request<any>(
        `${networksURLS[selectedNetwork]}`,
        "api_getTransactionReceipt",
        "POST",
        {"jsonrpc":"2.0","method":"api_getTransactionReceipt","params": [hash],"id":1}
    );
  }

export const api_getBlockByNumber = async (selectedNetwork: NetworkKey, n: string) => {
    return request<any>(
        `${networksURLS[selectedNetwork]}`,
        "api_getBlockByNumber",
        "POST",
        {"jsonrpc":"2.0","method":"api_getBlockByNumber","params": [n],"id":1}
    );
  }

export const api_getAccount = async (selectedNetwork: NetworkKey, address: string) => {
    return request<any>(
        `${networksURLS[selectedNetwork]}`,
        "api_getAccount",
        "POST",
        {"jsonrpc":"2.0","method":"api_getAccount","params": [address],"id":1}
    );
  }

// Functions
async function requestAsResponse<T>(
    url: string,
    name: string,
    method: "GET" | "POST" = "GET",
    body?: any
) {
    const response: Response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method === "POST" ? JSON.stringify(body) : undefined,
    });
  
    if (!response.ok) {
      throw new Error(`${name} call failed.`);
    }
  
    return response;
}
  
async function requestWithHeaders<T>(
    url: string,
    name: string,
    method: "GET" | "POST" = "GET",
    body?: any
) {
    const response: Response = await requestAsResponse(url, name, method, body);

    const data: T = await response.json();
    return {
        data: data,
        headers: response.headers
    };
}
  
async function request<T>(
    url: string,
    name: string,
    method: "GET" | "POST" = "GET",
    body?: any
) {
    const response: Response = await requestAsResponse(url, name, method, body);

    const data: T = await response.json();
    return data;
}