const express = require('express');
const app = express();

app.get('/', (req, res) => {
    if (req.session.username) {
        res.render('store', { user: req.session.username });
    } 
    else {
        res.render('store');
    }
});

module.exports = app;