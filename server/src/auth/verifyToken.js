import jwt from 'jsonwebtoken';
import Doctor from '../models/doctorSchema.js';
import User from '../models/userSchema.js';

export const authenticate = async (req, res, next) => {

    // get token from header
    const authToken = req.headers.authorization;

    // verify if token exists
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({
            success: false,
            message: 'Access denied, no token provided'
        })
    }

    try {
        // console.log(authToken);
        const token = authToken.split(' ')[1]; // Bearer <token> ----> this will only take then token part

        // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.userId = decoded.id;
        req.role = decoded.role;

        next(); // call next middleware
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Session expired. Please login again.'
            })
        }
        return res.status(401).json({
            success: false,
            message: 'Access denied, invalid token'
        })
    }

}

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId;

    let user;

    const patient = await User.findById(userId);
    const doctor = await Doctor.findById(userId);

    console.log(patient);
    console.log(doctor);

    if (patient) {
        user = patient;
    } else if (doctor) {
        user = doctor;
    } else {
        return res.status(401).json({
            success: false,
            message: "User not found"
        });
    }

    if (!roles.includes(user.role)) {
        return res.status(401).json({
            success: false,
            message: "You aren't authorized"
        });
    }
    next();
}
