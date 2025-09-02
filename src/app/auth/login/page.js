'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Link from 'next/link';
export default function LoginPage(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const onSubmit=async(e)=>{ e.preventDefault(); await signIn('credentials',{ email,password,callbackUrl:'/' }); };
  return (<div className="max-w-md mx-auto bg-white rounded-2xl shadow-soft p-6">
    <h1 className="text-2xl font-bold mb-4">Login</h1>
    <form onSubmit={onSubmit} className="space-y-3">
      <input className="w-full border rounded-xl px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full border rounded-xl px-3 py-2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button className="btn-primary w-full" type="submit">Sign In</button>
    </form>
    <p className="text-sm text-slate-600 mt-3">New here? <Link className="underline" href="/auth/register">Create an account</Link></p>
  </div>);
}

