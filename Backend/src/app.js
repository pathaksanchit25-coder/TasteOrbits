//create server

const express = require('express');
const cors = require('cors');
const app = express();
const authRoutes = require('./routes/auth.routes');
const createDeliveryRoute = require('./routes/foodDeliveryAdd.routes');
const createRestaurantRoute = require('./routes/foodRestaurantAdd.routes');
const userUpdateRoute = require('./routes/userUpdate.routes');
const foodPartnerUpdateRoute = require('./routes/foodPartnerUpdate.routes');
const foodDeliveryUpdateRoute = require('./routes/foodDeliveryUpdate.routes');
const foodRestaurantUpdateRoute = require('./routes/foodRestaurantUpdate.routes');
const foodPartnerDashboardRoutes = require('./routes/foodPartnerDashboard.routes');
const foodRestaurantCardDataRoutes = require('./routes/foodRestaurantCardData.routes');

const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','PUT','DELETE'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth',authRoutes);
app.use('/api/create',createDeliveryRoute);
app.use('/api/create',createRestaurantRoute);
app.use('/api/new',userUpdateRoute);
app.use('/api/new',foodPartnerUpdateRoute);
app.use('/api/new',foodDeliveryUpdateRoute);
app.use('/api/new',foodRestaurantUpdateRoute);
app.use('/api/foodpartner',foodPartnerDashboardRoutes);
app.use('/api/restaurantData',foodRestaurantCardDataRoutes);


module.exports = app;


