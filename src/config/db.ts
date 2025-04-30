import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('Conectado a MongoDB');
  } catch (error) {
    console.error('No fue posible conectar a la base de datos: ', error);
    process.exit(1);
  }
};
