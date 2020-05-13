import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 80;

export const mongoUrl = process.env.MONGO_URL;