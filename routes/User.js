const express = require('express');
const auth = require('../middleware/auth');
const app = express();
const { User } = require('../models/user');

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

app.get('/EditProfile', async (req, res) =>{
  try{
    const id = req.query.id;
    const userdata = await user.findById({ _id:id });
    if(userdata){
      res.render('EditProfile', {user: userdata});

    }else{
      res.redirect('/Homepage')
    }
  }catch{

  }
});

app.post('EditProfile', (req, res)=>{
  const id = req.session._id;
  if (!id) {
      return res.redirect('/login');
  } 

  console.log('ID:', id);
  res.render('EditProfile', { id: id});
})
  
module.exports = app;