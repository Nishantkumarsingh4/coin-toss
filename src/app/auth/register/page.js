'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function RegisterPage(){
  const [form,setForm]=useState({ name:'', email:'', password:'' }); const [msg,setMsg]=useState('');
  const onSubmit=async(e)=>{ e.preventDefault(); setMsg(''); const res=await fetch('/api/register',{ method:'POST', body: JSON.stringify(form) }); const json=await res.json(); setMsg(res.ok?'Registered! You can now login.':(json.error||'Error')); };
  return (<div className="max-w-md mx-auto bg-white rounded-2xl shadow-soft p-6">
    <h1 className="text-2xl font-bold mb-4">Create Account</h1>
    <form onSubmit={onSubmit} className="space-y-3">
      <input className="w-full border rounded-xl px-3 py-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
      <input className="w-full border rounded-xl px-3 py-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <input className="w-full border rounded-xl px-3 py-2" type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
      <button className="btn-primary w-full" type="submit">Register</button>
    </form>
    {msg && <p className="text-sm mt-3">{msg}</p>}
    <p className="text-sm text-slate-600 mt-3">Already have an account? <Link className="underline" href="/auth/login">Login</Link></p>
  </div>);
}

