import AllChallenges from "../Components/AllChallenges";

type ChallengesTabProps = {
  address: string;
};

export default function ChallengesTab({address}: ChallengesTabProps) {
  return <AllChallenges address={address} />;
}
