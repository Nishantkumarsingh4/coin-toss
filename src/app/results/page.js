import HistoryTable from '@/components/HistoryTable';
export const metadata = { title: 'Results - CoinToss' };
export default function ResultsPage(){ return (<div className="space-y-6"><h1 className="text-2xl font-bold">All Results</h1><HistoryTable/></div>); }