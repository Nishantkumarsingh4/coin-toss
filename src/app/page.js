
import Coin from '@/components/Coin';
import HistoryTable from '@/components/HistoryTable';

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <section className="bg-sky-100 rounded-2xl shadow-soft p-6">
        <h1 className="text-2xl font-bold mb-2">Flip a Fair Coin</h1>
        <p className="text-slate-600 mb-6">
          Flip a virtual coin instantly and get fair, random results every time.
        </p>
        <Coin />
      </section>
      <section>
        <HistoryTable />
      </section>
    </div>
  );
}
