import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  averageRating: number;
  ratingsCount: number;
  createAt: Date;
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image: String,
  averageRating: { type: Number, default: 0 },
  ratingsCount: { type: Number, default: 0 },
  createAt: { type: Date, default: Date.now },
});

export default model<IProduct>('Product', productSchema);
