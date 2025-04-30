import { Schema, model, Document } from 'mongoose';

export interface IProduct {
  title: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  rating: number;
  createAt: Date;
}

const productSchema = new Schema<IProduct>({
  title: { type: String, required: true },
  description: String,
  price: Number,
  category: String,
  stock: Number,
  image: String,
  rating: Number,
  createAt: { type: Date, default: Date.now },
});

export default model('Product', productSchema);
