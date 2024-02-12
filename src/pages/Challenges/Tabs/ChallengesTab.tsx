import AllChallenges from "../Components/AllChallenges";

type ChallengesTabProps = {
  address: string;
  accountData: any;
};

export default function ChallengesTab({address, accountData}: ChallengesTabProps) {
  return <AllChallenges address={address} accountData={accountData} />;
}
