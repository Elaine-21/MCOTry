const mongoose = require('mongoose');

const cheeseSchema = new mongoose.Schema({
    username:{
        type: String
    },
    token: {
        type: String
    },
    content: {
        type: String
    }
});

const Cheese = mongoose.model('Cheese', cheeseSchema);

exports.Cheese = Cheese;