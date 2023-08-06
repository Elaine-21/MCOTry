const express = require('express');
const auth = require('../middleware/auth');
const app = express();

app.get('/', (req, res) => {
   
  
    res.render('SearchResult');
});


  
module.exports = app;