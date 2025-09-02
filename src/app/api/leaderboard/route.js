import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Toss from '@/models/Toss';
import User from '@/models/User';

export async function GET(){
  await connectDB();
  const agg = await Toss.aggregate([
    { $match: { userId: { $ne: null } } },
    { $group: { _id: '$userId', total: { $sum: 1 }, heads: { $sum: { $cond: [{ $eq: ['$outcome','Heads'] }, 1, 0] } } } },
    { $sort: { total: -1 } },
    { $limit: 20 }
  ]);
  const users = await User.find({ _id: { $in: agg.map(a=>a._id) } }, 'name email').lean();
  const map = Object.fromEntries(users.map(u=>[String(u._id),u]));
  const items = agg.map(a=>({ ...a, ...(map[String(a._id)]||{}) }));
  return NextResponse.json({ items });
}