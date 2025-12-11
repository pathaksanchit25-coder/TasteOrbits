const jwt = require('jsonwebtoken');
const foodReasturantModel = require('../models/foodRestaurentDiningOut.model');


const getFoodRestaurantCardData = async (req,res)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const foodPartnerId = decoded.id;   
        const foodRestaurantCardData = await foodReasturantModel.find({foodPartnerId:foodPartnerId});
        return res.status(200).json({foodRestaurantCardData});
    }catch(err){
        return res.status(500).json({message:"Server Error"});
    }
};

module.exports = getFoodRestaurantCardData
