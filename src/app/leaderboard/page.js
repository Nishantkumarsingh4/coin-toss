import LeaderboardCard from '@/components/LeaderboardCard';
export const metadata = { title: 'Leaderboard - CoinToss' };
export default function LeaderboardPage(){ return (<div className="space-y-6"><h1 className="text-2xl font-bold">Leaderboard</h1><LeaderboardCard/></div>); }