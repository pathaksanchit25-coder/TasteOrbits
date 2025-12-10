const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

// ================== USER UPDATE ==================
async function updateUser(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Please Login First' });
    }

    try {
        // Verify JWT and extract user ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const { fullName, email } = req.body;

        // Update only the logged-in user's record
        const user = await userModel.findByIdAndUpdate(
            decoded.id,
            { fullName, email },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'User updated successfully',
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

module.exports =  updateUser
