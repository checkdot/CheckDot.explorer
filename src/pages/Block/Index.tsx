import {useParams} from "react-router-dom";
import {Stack, Grid, Alert} from "@mui/material";
import React from "react";
import BlockTitle from "./Title";
import BlockTabs from "./Tabs";
import Error from "./Error";
import PageHeader from "../layout/PageHeader";

export default function BlockPage() {
  const {height} = useParams();

  const isLoading = false;
  const error = false;
  const data = {
    block_height: 137797553,
    first_version: 418631785,
    last_version: 418631785,
    block_timestamp: 1706124074084511,
    transactions: [
      {
        proposer:
          "0x2fd1e866773ea3670cbef6dc6e952ba6fa13130a69fabc98ad234bd834c3bcaf",
        epoch: "5647",
        round: "29037",
        version: 1,
        sequence_number: 1,
        hash: "0x04491f03b7c3e5ffeea5eba8f04961c1cc9481379d12ff03dd3a5a640da0aa58",
        type: "user_transaction",
        counterparty: {
          role: "receiver",
          address:
            "0x6d3e0c4576274ce99f20958925edaf74412b850ce01fb933deb4b70509f62d0a",
        },
        success: true,
        sender:
          "0x6d3e0c4576274ce99f20958925edaf74412b850ce01fb933deb4b70509f62d0a",
        payload: {
          function: "transfer",
        },
        amount: 1,
        expiration_timestamp_secs: 1706106324,
        timestamp: 1706106026491801,
        gas_used: 1111,
        gas_unit_price: 222,
        signature: {
          sender: {
            public_key:
              "0x3fe3f2e7f2db3f42d42e49ae737e71dbc4d431f8dd612805ce4b7f8b1152cdd2",
            signature:
              "0xb25ee1e37acff9914a855b2e0720b234c4172dd7b3f75376b0a7553ba55aa446997d51d2249e37b53b9c7ae6ca30dea19e353afe9508e3ad802cae646bf6d208",
            type: "ed25519_signature",
          },
          secondary_signer_addresses: [],
          secondary_signers: [],
          fee_payer_address:
            "0x6d3e0c4576274ce99f20958925edaf74412b850ce01fb933deb4b70509f62d0a",
          fee_payer_signer: {
            public_key:
              "0xcac0431f649192dcb575582d08d7e7c83911693d49369249a65caef801cd0cee",
            signature:
              "0xb1b9d323acc5ed337d9fcf4631cf1621a3c79fbf0166e84ccff70646297f747bd157f4d9c6bc8c027eecd6f4f1c542e8f249f92793d32f790399b68adae2e001",
            type: "ed25519_signature",
          },
          type: "fee_payer_signature",
        },
        state_change_hash:
          "0x1b7c4358e99eedd0c8c5d1fda3d59753087a1c3834e4f6ea5e389b44a409615f",
        event_root_hash:
          "0xbd6c278444f3d2c354d204f28f22cdaa79b8af6e8067803270fabe07b7f456a7",
        accumulator_root_hash:
          "0x76384499a7bea2acd62512bd692349d5dedc6e18d32a032cbb84cc4dc3b42252",
        events: [
          {
            guid: {
              account_address:
                "0x5ae6789dd2fec1a9ec9cccfb3acaf12e93d432f0a3a42c92fe1a9d490b7bbc06",
              creation_number: 12,
            },
            sequence_number: 1,
            type: "transfer",
            data: {
              collateral_delta: "18402159",
              collateral_type: {
                account_address:
                  "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
                module_name: "0x6173736574",
                struct_name: "0x55534443",
              },
              is_increase: false,
              is_long: true,
              is_market: true,
              order_id: "6956",
              pair_type: {
                account_address:
                  "0x5ae6789dd2fec1a9ec9cccfb3acaf12e93d432f0a3a42c92fe1a9d490b7bbc06",
                module_name: "0x706169725f7479706573",
                struct_name: "0x424e425f555344",
              },
              price: "2928052129105",
              size_delta: "2006031967",
              uid: "260105",
              user: "0xc74d295b882209cecdb7f7a167ecce786ee6bf324f962e20ad8ecc8245fb6a32",
            },
          },
          {
            guid: {
              account_address:
                "0x5ae6789dd2fec1a9ec9cccfb3acaf12e93d432f0a3a42c92fe1a9d490b7bbc06",
              creation_number: 12,
            },
            sequence_number: 1,
            type: "transfer",
            data: {
              collateral_delta: "18402159",
              collateral_type: {
                account_address:
                  "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
                module_name: "0x6173736574",
                struct_name: "0x55534443",
              },
              is_increase: false,
              is_long: true,
              is_market: true,
              order_id: "6956",
              pair_type: {
                account_address:
                  "0x5ae6789dd2fec1a9ec9cccfb3acaf12e93d432f0a3a42c92fe1a9d490b7bbc06",
                module_name: "0x706169725f7479706573",
                struct_name: "0x424e425f555344",
              },
              price: "2928052129105",
              size_delta: "2006031967",
              uid: "260105",
              user: "0xc74d295b882209cecdb7f7a167ecce786ee6bf324f962e20ad8ecc8245fb6a32",
            },
          },
          {
            guid: {
              account_address:
                "0x5ae6789dd2fec1a9ec9cccfb3acaf12e93d432f0a3a42c92fe1a9d490b7bbc06",
              creation_number: 12,
            },
            sequence_number: 1,
            type: "transfer",
            data: {
              collateral_delta: "18402159",
              collateral_type: {
                account_address:
                  "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
                module_name: "0x6173736574",
                struct_name: "0x55534443",
              },
              is_increase: false,
              is_long: true,
              is_market: true,
              order_id: "6956",
              pair_type: {
                account_address:
                  "0x5ae6789dd2fec1a9ec9cccfb3acaf12e93d432f0a3a42c92fe1a9d490b7bbc06",
                module_name: "0x706169725f7479706573",
                struct_name: "0x424e425f555344",
              },
              price: "2928052129105",
              size_delta: "2006031967",
              uid: "260105",
              user: "0xc74d295b882209cecdb7f7a167ecce786ee6bf324f962e20ad8ecc8245fb6a32",
            },
          },
        ],
      },
    ],
  };

  if (isLoading) {
    return null;
  }

  if (error) {
    return <Error error={error} height={height ?? ""} />;
  }

  if (!data) {
    return (
      <Alert severity="error">
        Got an empty response fetching block with height {height}
        <br />
        Try again later
      </Alert>
    );
  }

  return (
    <Grid container spacing={1}>
      <PageHeader />
      <Grid item xs={12}>
        <Stack direction="column" spacing={4} marginTop={2}>
          <BlockTitle />
          <BlockTabs data={data} />
        </Stack>
      </Grid>
    </Grid>
  );
}
