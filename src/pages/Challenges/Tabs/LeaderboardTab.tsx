import ChallengeAllLeaderboard from "../Components/ChallengeAllLeaderboard";

type LeaderboardTabProps = {
  address: string;
};

export default function LeaderboardTab({address}: LeaderboardTabProps) {
  return <ChallengeAllLeaderboard address={address} />;
}
