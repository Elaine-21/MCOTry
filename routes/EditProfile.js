const express = require('express');
const app = express();

app.get('/', (req, res) => {
    if (req.session.username) {
        res.render('EditProfile', { user: req.session.username });
    } 
    else {
        res.render('EditProfile');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      res.redirect('/Homepage');
    });
  });

module.exports = app;