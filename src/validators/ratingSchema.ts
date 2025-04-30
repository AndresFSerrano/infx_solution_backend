import { z } from 'zod';

export const ratingSchema = z.object({
  value: z
    .number({
      required_error: 'La calificación es obligatoria',
      invalid_type_error: 'La calificación debe ser un número',
    })
    .min(0, 'La calificación mínima es 0')
    .max(5, 'La calificación máxima es 5'),
});
