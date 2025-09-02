import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Toss from '@/models/Toss';

export async function GET(req){
  await connectDB();
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page')||'1',10);
  const limit = parseInt(searchParams.get('limit')||'10',10);
  const skip = (page-1)*limit;
  const items = await Toss.find().sort({createdAt:-1}).skip(skip).limit(limit).lean();
  const total = await Toss.countDocuments();
  return NextResponse.json({ items, total, page, limit });
}