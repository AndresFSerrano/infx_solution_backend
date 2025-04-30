import { Router } from 'express';
import { getProductsByQuery, getProductById, createProduct } from '../controllers/productController';

const router = Router();

router.get('/items/', getProductsByQuery);
router.get('/items/:id', getProductById);
router.post('/create', createProduct);

export default router;
