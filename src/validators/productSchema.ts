import { z } from 'zod';

export const productSchema = z.object({
  title: z.string({
    required_error: 'El título es obligatorio',
  }).min(1, 'El título no puede estar vacío'),

  description: z.string().optional(),

  price: z.number({
    required_error: 'El precio es obligatorio',
    invalid_type_error: 'El precio debe ser un número',
  }).nonnegative('El precio no puede ser negativo'),

  category: z.string({
    required_error: 'La categoría es obligatoria',
  }).min(1, 'La categoría no puede estar vacía'),

  stock: z.number({
    invalid_type_error: 'El stock debe ser un número',
  }).int('El stock debe ser un número entero')
    .nonnegative('El stock no puede ser negativo')
    .optional(),

  image: z.string()
    .url('La imagen debe ser una URL válida')
    .optional(),

  rating: z.number({
    invalid_type_error: 'La calificación debe ser un número',
  }).min(0, 'La calificación no puede ser menor a 0')
    .max(5, 'La calificación no puede ser mayor a 5')
    .optional(),
});
