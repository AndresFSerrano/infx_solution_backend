import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import Rating from '../models/Rating';
import Product from '../models/Product';
import { ratingSchema } from '../validators/ratingSchema';

export const rateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const parsed = ratingSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        error: 'Datos inválidos',
        issues: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID de producto inválido' });
      return;
    }

    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }

    const { value } = parsed.data;
    const userId = uuidv4();

    const rating = new Rating({ productId: id, value, userId });
    await rating.save();

    const stats = await Rating.aggregate([
      { $match: { productId: new mongoose.Types.ObjectId(id) } },
      {
        $group: {
          _id: '$productId',
          avg: { $avg: '$value' },
          count: { $sum: 1 },
        },
      },
    ]);

    if (stats.length > 0) {
      product.averageRating = parseFloat(stats[0].avg.toFixed(2));
      product.ratingsCount = stats[0].count;
      await product.save();
    }

    res.status(201).json({ message: 'Calificación registrada', userId, rating });
  } catch (error) {
    res.status(500).json({ error: 'Error al calificar producto', details: error });
  }
};
