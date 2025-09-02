import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

export async function POST(req){
  await connectDB();
  const { name, email, password } = await req.json();
  if (!email || !password) return NextResponse.json({ error:'Missing fields' }, { status:400 });
  const existing = await User.findOne({ email });
  if (existing) return NextResponse.json({ error:'Email already registered' }, { status:400 });
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name: name||'', email, password: hashed });
  return NextResponse.json({ id: user._id, email: user.email });
}