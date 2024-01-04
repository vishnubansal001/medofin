// require('dotenv').config({ path: './.env' });
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import { app } from './app.js';

dotenv.config({
    path: './.env'
});


// connecting to the database and starting the server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: ${process.env.PORT || 8000}`);
        })
    })
    .catch((err) => {
        console.log("Mongo db connection failed !!", err);
    })

