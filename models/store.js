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


const storeData = [
    {   username:'GangGangStore',
        token:'/images/store/GangGangP1.jpg',
        content:'a',
    },
    {   username:'EverythingButCheese',
        token:'/images/store/EBC.png',
        content:'gang',
    },

    {   username:'24chicken',
        token:'/images/24chick.png',
        content:'Serving happiness at a budget friendly price since 2017. Selling delicious Korean Fried Chicken is not our only goal. Being part of our customers’ lives and communities is what we aim for.',

    }
];

Store.insertMany(storeData)
      .then(() => console.log('Data inserted successfully'))
      .catch((err) => console.error('Error inserting data:', err))

exports.Store = Store;