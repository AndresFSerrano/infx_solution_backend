import { Request, Response } from 'express';
import Product from '../models/Product';
import mongoose from 'mongoose';
import { productSchema } from '../validators/productSchema';

export const getProductsByQuery = async (
  req: Request<{}, {}, {}, { q?: string }>,
  res: Response
): Promise<void> => {
  try {
    const query = req.query.q;
    if (!query) {
      res.status(400).json({ error: 'Parámetro de búsqueda "q" es requerido.' });
      return;
    }

    const regex = new RegExp(query, 'i');
    const items = await Product.find({
      $or: [
        { title: regex },
        { description: regex },
        { category: regex },
      ]
    });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar productos.', details: error });
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ error: 'ID inválido' });
      return;
    }

    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar producto por ID', details: error });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const parsed = productSchema.safeParse(req.body);

    if (!parsed.success) {
        res.status(400).json({
        error: 'Datos inválidos',
        issues: parsed.error.flatten().fieldErrors,
      });
    }

    const newProduct = new Product(parsed.data);
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el producto', details: error });
  }
};
