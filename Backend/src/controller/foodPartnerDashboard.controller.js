const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodpartner.model');

// ================== FOOD PARTNER DASHBOARD ==================
async function foodPartnerDashboard(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
    try {
        // Verify JWT and extract partner ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const partnerId = decoded.id;
        // Fetch food partner details
        const foodPartner = await foodPartnerModel.findById(partnerId).select('-password');
        if (!foodPartner) {
            return res.status(404).json({ message: 'Food partner not found' });
        }
        res.status(200).json({
            message: 'Food partner dashboard data fetched successfully',
            foodPartner
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = foodPartnerDashboard;