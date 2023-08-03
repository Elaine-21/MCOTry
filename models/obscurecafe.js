const mongoose = require('mongoose');


const cafeSchema = new mongoose.Schema({
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

const Cafe = mongoose.model('Cafe', cafeSchema);

exports.Cafe = Cafe;