const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const foodPartnerModel = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');

// ================== USER AUTH ==================

async function registerUser(req, res) {
    try {
        const { fullName, email, password } = req.body;

        const isExist = await userModel.findOne({ email });
        if (isExist) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            fullName,
            email,
            password: hashPassword,
        });

        const token = jwt.sign(
            { id: user._id, fullName: user.fullName, email: user.email },
            process.env.JWT_SECRET
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                email: user.email,
                fullName: user.fullName
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { id: user._id, fullName: user.fullName, email: user.email },
            process.env.JWT_SECRET
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.status(200).json({ message: 'User logged in successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

function logoutUser(req, res) {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    res.status(200).json({ message: 'User logged out successfully' });
}

// ================== FOOD PARTNER AUTH ==================

async function registerFoodPartner(req, res) {
    try {
        const { fullName, email, password, address } = req.body;

        const isPartner = await foodPartnerModel.findOne({ email });
        if (isPartner) {
            return res.status(400).json({ message: 'Partner already exists' });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const foodPartner = await foodPartnerModel.create({
            fullName,
            email,
            password: hashPassword,
            address
        });

        const token = jwt.sign(
            {
                id: foodPartner._id,
                fullName: foodPartner.fullName,
                email: foodPartner.email,
                address: foodPartner.address
            },
            process.env.JWT_SECRET
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.status(201).json({
            message: 'Partner registered successfully',
            foodPartner: {
                id: foodPartner._id,
                email: foodPartner.email,
                fullName: foodPartner.fullName
            }
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

async function loginFoodPartner(req, res) {
    try {
        const { email, password } = req.body;

        const foodPartner = await foodPartnerModel.findOne({ email });
        if (!foodPartner) {
            return res.status(400).json({ message: 'Invalid Partner or Password' });
        }

        const isPasswordValid = await bcrypt.compare(password, foodPartner.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid Partner or Password' });
        }

        const token = jwt.sign(
            { id: foodPartner._id, fullName: foodPartner.fullName, email: foodPartner.email },
            process.env.JWT_SECRET
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.status(200).json({ message: 'Partner logged in successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
}

function logoutFoodPartner(req, res) {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    });
    res.status(200).json({ message: 'Partner logged out successfully' });
}

// ================== EXPORTS ==================

module.exports = {
    registerUser,
    loginUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutUser,
    logoutFoodPartner
};