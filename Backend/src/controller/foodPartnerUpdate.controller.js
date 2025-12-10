const jwt = require('jsonwebtoken');
const foodPartnerModel = require('../models/foodpartner.model')

// ================== FOOD PARTNER UPDATE ==================
async function foodPartnerUpdateController(req, res) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    try {
        // Verify JWT and extract partner ID
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const partnerId = decoded.id;

        const updateData = req.body;

        // Update the food partner in the database
        const updatedPartner = await foodPartnerModel.findByIdAndUpdate(
            partnerId,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedPartner) {
            return res.status(404).json({ message: 'Food partner not found' });
        }

        res.status(200).json({
            message: 'Food partner updated successfully',
            partner: updatedPartner
        });
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized: Invalid token', error: error.message });
    }
}

module.exports = foodPartnerUpdateController;