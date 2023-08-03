const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
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

const Store = mongoose.model('Store', storeSchema);

exports.Store = Store;