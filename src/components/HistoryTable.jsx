'use client';
import { useEffect, useState } from 'react';
export default function HistoryTable(){
  const [data,setData]=useState([]); const [page,setPage]=useState(1); const [loading,setLoading]=useState(false);
  const load=async(p=1)=>{ setLoading(true); const r=await fetch(`/api/results?page=${p}&limit=10`,{cache:'no-store'}); const j=await r.json(); setData(j.items||[]); setLoading(false); };
  useEffect(()=>{ load(page); },[page]);
  return (
    <div className="bg-white rounded-2xl shadow-soft p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg">Recent Tosses</h3>
        <div className="flex gap-2">
          <button onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-2 border rounded-xl">Prev</button>
          <button onClick={()=>setPage(p=>p+1)} className="px-3 py-2 border rounded-xl">Next</button>
        </div>
      </div>
      {loading?<p>Loading...</p>:(
        <table className="w-full text-sm">
          <thead><tr className="text-left text-slate-600"><th className="py-2">#</th><th className="py-2">Outcome</th><th className="py-2">When</th></tr></thead>
          <tbody>
            {data.map((row,i)=>(<tr key={row._id} className="border-t"><td className="py-2">{i+1}</td><td className="py-2">{row.outcome}</td><td className="py-2">{new Date(row.createdAt).toLocaleString()}</td></tr>))}
            {data.length===0 && (<tr><td colSpan={3} className="py-4 text-center text-slate-500">No results yet</td></tr>)}
          </tbody>
        </table>
      )}
    </div>
  );
}