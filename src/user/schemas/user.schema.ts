import * as mongoose from 'mongoose';
import { GenderEnum } from '../enums/gender.enum';
import { RoleEnum } from '../enums/role.enum';

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  avatar: { type: String, default: null },
  avatarId: { type: String, default: null },
  firstNAme: { type: String, required: true },
  lastNAme: { type: String, required: true },
  gender: { type: String, required: true, enum: Object.values(GenderEnum) },
  address: {
    city: { type: String, default: null },
    country: { type: String, default: null },
    addressLine1: { type: String, default: null },
    addressLine2: { type: String, default: null },
  },
  profession: { type: String, default: null },
  phone: { type: String, default: null },
  role: { type: [String], required: true, enum: Object.values(RoleEnum) },
  password: { type: String, required: true },
});
UserSchema.index({ email: 1 }, { unique: true });
