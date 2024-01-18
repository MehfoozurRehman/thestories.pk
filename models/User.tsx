import { Document, Schema, model } from "mongoose";

import mongoose from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  profilePicture?: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    profilePicture: { type: String, default: null },
    email: { type: String, required: true, trim: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || model<IUser>("User", UserSchema);
