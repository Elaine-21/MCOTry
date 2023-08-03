const express = require('express');
const app = express();

app.get('/', (req, res) => {
    if (req.session.username) {
        res.render('restolist', { user: req.session.username });
    } 
    else {
        res.render('restolist');
    }
});

module.exports = app;