import express from 'express';
import { getAllReviews, createReviews } from '../controllers/reviewsController.js';
import { authenticate, restrict } from '../auth/verifyToken.js'


const router = express.Router({ mergeParams: true }); // this mergeParams is used to get the params from the parent route means from doctors.js


router
    .route('/')
    .get(getAllReviews)
    .post(authenticate, restrict(['patient']), createReviews);
// .post(authenticate, createReviews);


export default router;