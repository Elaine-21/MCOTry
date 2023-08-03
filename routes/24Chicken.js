const express = require('express');
const app = express();

app.get('/', (req, res) => {
    if (req.session.username) {
        res.render('24Chicken', { user: req.session.username });
    } 
    else {
        res.render('24Chicken');
    }
});

module.exports = app;