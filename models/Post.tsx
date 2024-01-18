import { Document, Schema, model } from "mongoose";

import mongoose from "mongoose";

export interface IPost extends Document {
  _id: string;
  authorId: string;
  categoryIds: string[];
  title: string;
  metaTitle: string;
  slug: string;
  summary: string;
  published: boolean;
  featured: boolean;
  tags: string[];
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    categoryIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    ],
    title: { type: String, required: true },
    metaTitle: { type: String, required: true },
    slug: { type: String, required: true },
    summary: { type: String, required: true },
    published: { type: Boolean, required: true },
    featured: { type: Boolean, required: true },
    tags: [{ type: String, required: true }],
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Post || model<IPost>("Post", PostSchema);
