import { Router } from 'express';
import { rateProduct } from '../controllers/routerContorller';

const router = Router();
router.post('/items/:id/ratings', rateProduct);

export default router;