const mongoose = require('mongoose');

const chickenSchema = new mongoose.Schema({
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

const Chicken = mongoose.model('24Chicken', chickenSchema);

exports.Chicken = Chicken;