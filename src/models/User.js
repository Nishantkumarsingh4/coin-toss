import mongoose, { Schema } from 'mongoose';
const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
}, { timestamps: true });
export default mongoose.models.User || mongoose.model('User', UserSchema);