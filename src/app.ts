import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemsRoutes';
import rateRoutes from './routes/rateRoutes';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);
app.use('/api',rateRoutes);

export default app;
