'use client';
import { useEffect, useState } from 'react';
export default function LeaderboardCard(){
  const [data,setData]=useState([]);
  useEffect(()=>{ fetch('/api/leaderboard',{cache:'no-store'}).then(r=>r.json()).then(j=>setData(j.items||[])); },[]);
  return (
    <div className="bg-white rounded-2xl shadow-soft p-4">
      <h3 className="font-semibold text-lg mb-3">🏆 Leaderboard</h3>
      <table className="w-full text-sm">
        <thead><tr className="text-left text-slate-600"><th className="py-2">User</th><th className="py-2">Tosses</th><th className="py-2">% Heads</th></tr></thead>
        <tbody>
          {data.map(u=> (<tr key={u._id} className="border-t"><td className="py-2">{u.name||u.email}</td><td className="py-2">{u.total}</td><td className="py-2">{((u.heads/Math.max(1,u.total))*100).toFixed(0)}%</td></tr>))}
          {data.length===0 && <tr><td colSpan={3} className="py-4 text-center text-slate-500">No data yet</td></tr>}
        </tbody>
      </table>
    </div>
  );
}