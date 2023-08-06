const mongoose = require('mongoose');
require('dotenv').config();
const url = "mongodb+srv://elainemartin022:vcXcJq891xQPD940@cluster0.x2as0ew.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, {
    useNewURLParser: true,
    useUnifiedTopology:true,
    family: 4
})
    .then(() => { console.log('Connected to Mongodb')})
    .catch((err) => { console.log(`Connection failed: ${err}`)})

