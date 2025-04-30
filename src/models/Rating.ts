import { Schema, model, Document, Types } from 'mongoose';

export interface IRating extends Document {
  productId: Types.ObjectId;
  userId?: string;
  value: number;
  createdAt: Date;
}

const ratingSchema = new Schema<IRating>({
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: String },
  value: { type: Number, required: true, min: 0, max: 5 },
  createdAt: { type: Date, default: Date.now },
});

export default model<IRating>('Rating', ratingSchema);
