import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemsRoutes';
import { connectDB } from './config/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', itemRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Backend corriendo en el puerto:  ${PORT}`);
    });
  });
