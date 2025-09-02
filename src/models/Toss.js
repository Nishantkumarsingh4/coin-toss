import mongoose, { Schema } from 'mongoose';
const TossSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  outcome: { type: String, enum: ['Heads', 'Tails'], required: true },
}, { timestamps: true });
export default mongoose.models.Toss || mongoose.model('Toss', TossSchema);