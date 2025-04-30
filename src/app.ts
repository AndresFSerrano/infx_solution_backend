import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemsRoutes';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);

export default app;
