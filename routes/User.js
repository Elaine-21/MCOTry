const express = require('express');
const auth = require('../middleware/auth');
const app = express();

app.get('/', (req, res) => {
    const username = req.session.username;
    if (!username) {
      return res.redirect('/login'); 
    }

    console.log('username: ', username);
  
    res.render('User', {user: username});
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