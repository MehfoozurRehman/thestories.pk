import { Document, Schema, model } from "mongoose";

import mongoose from "mongoose";

export interface ICategory extends Document {
  _id: string;
  name: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    isFeatured: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Category ||
  model<ICategory>("Category", CategorySchema);
