const mongoose = require('mongoose');


function connectToDB(req, res) {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log('Connected to the database');
        console.log("Mongo URI:", process.env.MONGODB_URI);
    }).catch((err) => {
        console.log('Cannot connect to the database', err);
        console.log("Mongo URI:", process.env.MONGODB_URI);
        process.exit();
    });
};


module.exports = connectToDB;