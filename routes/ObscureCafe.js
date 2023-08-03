const express = require('express');
const app = express();

app.get('/', (req, res) => {
    if (req.session.username) {
        res.render('ObscureCafe', { user: req.session.username });
    } 
    else {
        res.render('ObscureCafe');
    }
});

module.exports = app;