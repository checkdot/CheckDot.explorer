import React from "react";
import Error from "../Error";
import EmptyTabContent from "../../../components/IndividualPageContent/EmptyTabContent";
import useExpandedList from "../../../components/hooks/useExpandedList";
import CollapsibleCards from "../../../components/IndividualPageContent/CollapsibleCards";
import CollapsibleCard from "../../../components/IndividualPageContent/CollapsibleCard";
import JsonViewCard from "../../../components/IndividualPageContent/JsonViewCard";

function ResourcesContent({data}: {data: any}): JSX.Element {
  const resources: any[] = data ?? [];

  const {expandedList, toggleExpandedAt, expandAll, collapseAll} =
    useExpandedList(resources.length);

  if (resources.length === 0) {
    return <EmptyTabContent />;
  }

  return (
    <CollapsibleCards
      expandedList={expandedList}
      expandAll={expandAll}
      collapseAll={collapseAll}
    >
      {resources.map((resource, i) => (
        <CollapsibleCard
          key={i}
          titleKey="Type:"
          titleValue={resource.type}
          expanded={expandedList[i]}
          toggleExpanded={() => toggleExpandedAt(i)}
        >
          <JsonViewCard data={resource.data} />
        </CollapsibleCard>
      ))}
    </CollapsibleCards>
  );
}

type ResourcesTabProps = {
  address: string;
  accountData: any;
};

export default function ResourcesTab({address}: ResourcesTabProps) {
  const isLoading = false;
  const error = false;

  const data = [
    {
      type: "0x54ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e90::lzapp::Config",
      data: {
        min_dst_gas_lookup: {
          handle:
            "0xf5cc4775ec7f4041b6b67bd861d1078c9d81369187ff2d7a8b5ef645b868bdbe",
        },
      },
    },
    {
      type: "0x54ad3d30af77b60d939ae356e6606de9a4da67583f02b962d2d3f2e481484e90::remote::Remotes",
      data: {
        peers: {
          handle:
            "0xad25e361e44429aa22b470253e28e1ef9cdb9724b859c7bae0f9091921297d36",
        },
      },
    },
    {
      type: "0x1::account::Account",
      data: {
        authentication_key:
          "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
        coin_register_events: {
          counter: "5",
          guid: {
            id: {
              addr: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
              creation_num: "0",
            },
          },
        },
        guid_creation_num: "15",
        key_rotation_events: {
          counter: "0",
          guid: {
            id: {
              addr: "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa",
              creation_num: "1",
            },
          },
        },
        rotation_capability_offer: {
          for: {
            vec: [],
          },
        },
        sequence_number: "45",
        signer_capability_offer: {
          for: {
            vec: [],
          },
        },
      },
    },
  ];

  if (isLoading) {
    return null;
  }

  if (error) {
    return <Error address={address} error={error} />;
  }

  return <ResourcesContent data={data} />;
}
