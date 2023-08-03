const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    image: {
        data: Buffer, 
        contentType: String 
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    education: {
        type: String,
        required: true,
        trim: true,
    },
    college: {
        type: String,
        required: true,
        trim: true,
    },
    profession: {
        type: String,
        required: true,
        trim: true,
    },
});

const Profile = mongoose.model('Profile', profileSchema);

exports.Profile = Profile;