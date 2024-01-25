import React from "react";
import {
  LearnMoreTooltip,
  LearnMoreTooltipPlaceholder,
} from "../../components/IndividualPageContent/LearnMoreTooltip";

export function getLearnMoreTooltip(txnField: string): JSX.Element | null {
  switch (txnField) {
    case "accumulator_root_hash":
      return (
        <LearnMoreTooltip
          text="An accumulator root hash is the root hash of a Merkle accumulator."
          link="https://checkdot.io"
        />
      );
    case "amount":
      return <LearnMoreTooltipPlaceholder />;
    case "authentication_key":
      return <LearnMoreTooltipPlaceholder />;
    case "block_height":
      return <LearnMoreTooltipPlaceholder />;
    case "epoch":
      return <LearnMoreTooltipPlaceholder />;
    case "event_root_hash":
      return (
        <LearnMoreTooltip
          text="Learn more about Event"
          link="https://checkdot.io"
          linkToText
        />
      );
    case "expiration_timestamp_secs":
      return (
        <LearnMoreTooltip
          text="A transaction ceases to be valid after its expiration time."
          link="https://checkdot.io"
        />
      );
    case "function":
      return (
        <LearnMoreTooltip text="Move function executed in the transaction." />
      );
    case "gas_fee":
      return (
        <LearnMoreTooltip
          text="Learn more about Gas Price"
          link="https://checkdot.io"
          linkToText
        />
      );
    case "gas_unit_price":
      return <LearnMoreTooltipPlaceholder />;
    case "gas_used":
      return <LearnMoreTooltipPlaceholder />;
    case "id":
      return <LearnMoreTooltipPlaceholder />;
    case "max_gas_amount":
      return (
        <LearnMoreTooltip
          text="The Maximum Gas Amount of a transaction is the maximum amount of gas the sender is ready to pay for the transaction."
          link="https://checkdot.io"
        />
      );
    case "proposer":
      return <LearnMoreTooltipPlaceholder />;
    case "receiver":
      return <LearnMoreTooltipPlaceholder />;
    case "round":
      return (
        <LearnMoreTooltip
          text="A round consists of achieving consensus on a block of transactions and their execution results."
          link="https://checkdot.io"
        />
      );
    case "sender":
      return (
        <LearnMoreTooltip
          text="Sender is the address of the originator account for a transaction."
          link="https://checkdot.io"
        />
      );
    case "sequence_number":
      return (
        <LearnMoreTooltip
          text="The sequence number for an account indicates the number of transactions that have been submitted and committed on chain from that account."
          link="https://checkdot.io"
        />
      );
    case "signature":
      return <LearnMoreTooltipPlaceholder />;
    case "state_change_hash":
      return <LearnMoreTooltipPlaceholder />;
    case "status":
      return <LearnMoreTooltipPlaceholder />;
    case "timestamp":
      return (
        <LearnMoreTooltip text="Timestamp is the machine timestamp of when the block is committed." />
      );
    case "version":
      return (
        <LearnMoreTooltip
          text="A version is also called “height” in blockchain literature."
          link="https://checkdot.io"
        />
      );
    case "vm_status":
      return (
        <LearnMoreTooltip
          text="Learn more about VM"
          link="https://checkdot.io"
          linkToText
        />
      );
    default:
      return <LearnMoreTooltipPlaceholder />;
  }
}
