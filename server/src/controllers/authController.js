// Import Mongoose and models
import mongoose from 'mongoose';
import User from '../models/userSchema.js';
import Doctor from '../models/doctorSchema.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

const generateToken = (user) => {
    return jwt.sign(
        { userId: user._id || '', role: user.role || '' },
        secretKey,
        { expiresIn: '1h' }
    );
};

export const handleUserRegister = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        if (!email || !password || !name || !role) {
            return res
                .json({ error: 'All fields are required' });
        }

        // Check if the user exists
        const [user, salt] = await Promise.all([
            role === 'patient' ? User.findOne({ email }).exec() : Doctor.findOne({ email }).exec(),
            bcryptjs.genSalt(10),
        ]);

        if (user) {
            return res.json({ error: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, salt);

        // Create and save the user
        const newUser = new (role === 'patient' ? User : Doctor)({
            name,
            email,
            password: hashedPassword,
            role,
            gender,
            photo,
        });

        await newUser.save();

        // Create and send the token
        const token = generateToken(newUser);

        // Set cookie with the token
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour

        res
            .cookie('Bearer', token, { httpOnly: true, expires: expiryDate })
            .status(201)
            .json({
                success: true,
                message: 'User registered successfully',
                token
            });
    } catch (error) {
        console.error('Error in user registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = null;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

    
        // check if user exists
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // check if password is correct
        const isPasswordCorrect = bcryptjs.compare(req.body.password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ status: false, message: 'Invalid credentials' });
        }

        // Create and send the token
        const token = generateToken(user);
        const { password, role, appointments, ...rest } = user._doc;

        res.status(200).json({ success: true, message: 'User logged in successfully', token, user: { ...rest }, role });
    } catch (error) {
        console.error('Error in user login:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
