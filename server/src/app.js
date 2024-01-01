import express from 'express';
import cors from 'cors'; // to allow cross origin requests
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import userRoute from './routes/users.js';
import doctorRoute from './routes/doctors.js';
import medicineRoute from './routes/medicine.js'
import reviewRoute from './routes/reviews.js'

const app = express();

// set up cors to allow us to accept requests from our client (origin , credentials)
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));


// middlewares
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: true, limit: '16mb' }));
app.use(express.static('public'));
app.use(cookieParser());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoute);
app.use('/api/doctors', doctorRoute);
app.use('/api/medicines', medicineRoute);
app.use('/api/reviews', reviewRoute);





export { app };