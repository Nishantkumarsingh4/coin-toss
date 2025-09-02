import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { connectDB } from '@/lib/db';
import Toss from '@/models/Toss';

export async function POST(){
  const session = await getServerSession(authOptions);
  await connectDB();
  const rnd = crypto.randomInt(0,2);
  const result = rnd===0 ? 'Heads' : 'Tails';
  await Toss.create({ userId: session?.user?.id || null, outcome: result });
  return NextResponse.json({ result });
}