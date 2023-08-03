const express = require('express');
const app = express();

app.get('/', (req, res) => {
    if (req.session.username) {
        res.render('EverythingButCheese', { user: req.session.username });
    } 
    else {
        res.render('EverythingButCheese');
    }
});

module.exports = app;