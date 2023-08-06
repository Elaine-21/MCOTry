const express = require('express');
const app = express();
const { Chicken } = require('../models/24chicken')
const { Cheese } = require('../models/everythingbutcheese')
const { Gang } = require('../models/ganggangstore')
const { Cafe } = require('../models/obscurecafe')
const { Store } = require('../models/store')
const { Tahmee } = require('../models/tahmee')
const { User, validateUser } = require('../models/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');

app.get('/', (req, res) => {
    res.render('Homepage');
});

app.get('/Homepage', (req, res) => {
    if (req.session.username) {
        res.render('Homepage', { user: req.session.username });
    } 
    else {
        res.render('Homepage');
    }
});

app.get('/restolist', (req, res) => {
    if (req.session.username) {
        res.render('restolist', { user: req.session.username });
    } 
    else {
        res.render('restolist');
    }
});
  
app.post('/SearchResult', async (req, res) => {
    const searchTerm = req.body.searchTerm ? req.body.searchTerm.trim() : '';
    console.log('Search Term:', searchTerm); // Check the value of the search term
  
    try {
      // Ensure searchTerm is not empty before using in the regex query
      if (searchTerm !== '') {
        const searchResults = await Store.find({
          $or: [
            { username: { $regex: searchTerm, $options: 'i' } },
            { token: { $regex: searchTerm, $options: 'i' } },
            { content: { $regex: searchTerm, $options: 'i' } },
          ],
        });
  
        console.log('Search Results:', searchResults); // Log the search results
  
        res.render('SearchResult', { results: searchResults });
      } else {
        res.render('SearchResult', { results: [] }); // Render the SearchResult template with an empty array
      }
    } catch (err) {
      console.error('Error executing database query:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.post('/signup', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.send(`Error: ${error}`);

    let { username, password, re_password } = req.body;
    const Auth = true;

    let user = await User.findOne({ username });
    if(user) return res.status(400).send('user already registered!');

    if (password != re_password) return res.status(400).send('passwords do not match!');

    user = new User({
        username, password, re_password, Auth
    });

    console.log(user);

    const token = await user.generateAuthToken();
    console.log(token);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.re_password = await bcrypt.hash(user.re_password, salt);

    user = await user.save();
    res.header('token', token).render('Homepage');
});


app.post('/24signup', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.send(`Error: ${error}`);

    let { username, password, re_password } = req.body;
    const Auth = true;

    let user = await User.findOne({ username });
    if(user) return res.status(400).send('user already registered!');

    if (password != re_password) return res.status(400).send('passwords do not match!');

    user = new User({
        username, password, re_password, Auth
    });

    console.log(user);

    const token = await user.generateAuthToken();
    console.log(token);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.re_password = await bcrypt.hash(user.re_password, salt);

    user = await user.save();
    res.header('token', token).render('24Chicken');
});

app.post('/cheesesignup', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.send(`Error: ${error}`);

    let { username, password, re_password } = req.body;
    const Auth = true;

    let user = await User.findOne({ username });
    if(user) return res.status(400).send('User already register!');

    if (password != re_password) return res.status(400).send('Passwords do not match!');

    user = new User({
        username, password, re_password, Auth
    });

    console.log(user);

    const token = await user.generateAuthToken();
    console.log(token);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.re_password = await bcrypt.hash(user.re_password, salt);

    user = await user.save();
    res.header('token', token).render('EverythingButCheese');
});

app.post('/gangsignup', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.send(`Error: ${error}`);

    let { username, password, re_password } = req.body;
    const Auth = true;

    let user = await User.findOne({ username });
    if(user) return res.status(400).send('user already registered!');

    if (password != re_password) return res.status(400).send('passwords do not match!');

    user = new User({
        username, password, re_password, Auth
    });

    console.log(user);

    const token = await user.generateAuthToken();
    console.log(token);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.re_password = await bcrypt.hash(user.re_password, salt);

    user = await user.save();
    res.header('token', token).render('GangGangStore');
});

app.post('/cafesignup', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.send(`Error: ${error}`);

    let { username, password, re_password } = req.body;
    const Auth = true;

    let user = await User.findOne({ username });
    if(user) return res.status(400).send('user already registered!');

    if (password != re_password) return res.status(400).send('passwords do not match!');

    user = new User({
        username, password, re_password, Auth
    });

    console.log(user);

    const token = await user.generateAuthToken();
    console.log(token);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.re_password = await bcrypt.hash(user.re_password, salt);

    user = await user.save();
    res.header('token', token).render('ObscureCafe');
});

app.post('/restosignup', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.send(`Error: ${error}`);

    let { username, password, re_password } = req.body;
    const Auth = true;

    let user = await User.findOne({ username });
    if(user) return res.status(400).send('user already register!');

    if (password != re_password) return res.status(400).send('passwords do not match!');

    user = new User({
        username, password, re_password, Auth
    });

    console.log(user);

    const token = await user.generateAuthToken();
    console.log(token);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.re_password = await bcrypt.hash(user.re_password, salt);

    user = await user.save();
    res.header('token', token).render('restolist');
});

app.post('/storesignup', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.send(`Error: ${error}`);

    let { username, password, re_password } = req.body;
    const Auth = true;

    let user = await User.findOne({ username });
    if(user) return res.status(400).send('user already registered!');

    if (password != re_password) return res.status(400).send('passwords do not match!');

    user = new User({
        username, password, re_password, Auth
    });

    console.log(user);

    const token = await user.generateAuthToken();
    console.log(token);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.re_password = await bcrypt.hash(user.re_password, salt);

    user = await user.save();
    res.header('token', token).render('store');
});

app.post('/tahmeesignup', async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.send(`Error: ${error}`);

    let { username, password, re_password } = req.body;
    const Auth = true;

    let user = await User.findOne({ username });
    if(user) return res.status(400).send('user already registered!');

    if (password != re_password) return res.status(400).send('passwords do not match!');

    user = new User({
        username, password, re_password, Auth
    });

    console.log(user);

    const token = await user.generateAuthToken();
    console.log(token);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.re_password = await bcrypt.hash(user.re_password, salt);

    user = await user.save();
    res.header('token', token).render('Tahmee');
});

// Route to handle login form submission
app.post('/login', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(`Error: ${error}`);
    
    let { username, password } = req.body;

    let user = await User.findOne({ username });
    if(!user) return res.status(400).send('invalid credentials!');

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('invalid credentials!');

    req.session.username = username;

    console.log('Login attempt:');
    console.log('Username:', username);
    console.log('Password:', password);

    const token = await user.generateAuthToken();
    console.log(token);
    
    res.header('token', token).render('Homepage', {user: username}); 
});

app.post('/24login', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(`Error: ${error}`);
    
    let { username, password } = req.body;

    let user = await User.findOne({ username });
    if(!user) return res.status(400).send('invalid credentials!');

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('invalid credentials!');

    req.session.username = username;

    console.log('Login attempt:');
    console.log('Username:', username);
    console.log('Password:', password);

    const token = await user.generateAuthToken();
    console.log(token);
    
    res.header('token', token).render('24Chicken', {user: username}); 
});

app.post('/cheeselogin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(`Error: ${error}`);
    
    let { username, password } = req.body;

    let user = await User.findOne({ username });
    if(!user) return res.status(400).send('invalid credentials!');

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('invalid credentials!');

    req.session.username = username;

    console.log('Login attempt:');
    console.log('Username:', username);
    console.log('Password:', password);

    const token = await user.generateAuthToken();
    console.log(token);
    
    res.header('token', token).render('EverythingButCheese', {user: username}); 
});

app.post('/ganglogin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(`Error: ${error}`);
    
    let { username, password } = req.body;

    let user = await User.findOne({ username });
    if(!user) return res.status(400).send('invalid credentials!');

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('invalid credentials!');

    req.session.username = username;

    console.log('Login attempt:');
    console.log('Username:', username);
    console.log('Password:', password);

    const token = await user.generateAuthToken();
    console.log(token);
    
    res.header('token', token).render('GangGangStore', {user: username}); 
});

app.post('/cafelogin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(`Error: ${error}`);
    
    let { username, password } = req.body;

    let user = await User.findOne({ username });
    if(!user) return res.status(400).send('invalid credentials!');

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('invalid credentials!');

    req.session.username = username;

    console.log('Login attempt:');
    console.log('Username:', username);
    console.log('Password:', password);

    const token = await user.generateAuthToken();
    console.log(token);
    
    res.header('token', token).render('ObscureCafe', {user: username}); 
});

app.post('/restologin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(`Error: ${error}`);
    
    let { username, password } = req.body;

    let user = await User.findOne({ username });
    if(!user) return res.status(400).send('invalid credentials!');

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('invalid credentials!');

    req.session.username = username;

    console.log('Login attempt:');
    console.log('Username:', username);
    console.log('Password:', password);

    const token = await user.generateAuthToken();
    console.log(token);
    
    res.header('token', token).render('restolist', {user: username}); 
});

app.post('/storelogin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(`Error: ${error}`);
    
    let { username, password } = req.body;

    let user = await User.findOne({ username });
    if(!user) return res.status(400).send('invalid credentials!');

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('invalid credentials!');

    req.session.username = username;

    console.log('Login attempt:');
    console.log('Username:', username);
    console.log('Password:', password);

    const token = await user.generateAuthToken();
    req.session.token = token;
    console.log(token);
    
    res.header('token', token).render('store', {user: username}); 
});

app.post('/tahmeelogin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.send(`Error: ${error}`);
    
    let { username, password } = req.body;

    let user = await User.findOne({ username });
    if(!user) return res.status(400).send('invalid credentials!');

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword) return res.status(400).send('invalid credentials!');

    req.session.username = username;

    console.log('Login attempt:');
    console.log('Username:', username);
    console.log('Password:', password);

    const token = await user.generateAuthToken();
    console.log(token);
    
    res.header('token', token).render('Tahmee', {user: username}); 
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('error destroying session:', err);
      }
      res.redirect('/Homepage'); 
    });
});

app.get('/24logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('error destroying session:', err);
      }
      res.redirect('/24Chicken'); 
    });
});

app.get('/cheeselogout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('error destroying session:', err);
      }
      res.redirect('/EverythingButCheese'); 
    });
});

app.get('/ganglogout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('error destroying session:', err);
      }
      res.redirect('/GangGangStore'); 
    });
});

app.get('/cafelogout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('error destroying session:', err);
      }
      res.redirect('/ObscureCafe'); 
    });
});

app.get('/restologout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('error destroying session:', err);
      }
      res.redirect('/restolist'); 
    });
});

app.get('/storelogout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('error destroying session:', err);
      }
      res.redirect('/store'); 
    });
});

app.get('/tahmeelogout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('error destroying session:', err);
      }
      res.redirect('/Tahmee'); 
    });
});

app.post('/storesubmit_comment', async (req, res) => {
    const username = req.session.username;
    const token = req.session.token
    let content = req.body.comment;
    console.log('Content:', content);

    let store = await new Store({
        username, token, content
    });

    store = await store.save();
    res.render('store', {user: username, comment: content});
});

app.post('/24submit_comment', async (req, res) => {
    const username = req.session.username;
    const token = req.session.token
    let content = req.body.comment;
    console.log('Content:', content);

    let chicken = await new Chicken({
        username, token, content
    });

    chicken = await chicken.save();
    res.render('24Chicken', {user: username, comment: content});
});

app.post('/chessesubmit_comment', async (req, res) => {
    const username = req.session.username;
    const token = req.session.token
    let content = req.body.comment;
    console.log('Content:', content);

    let cheese = await new Cheese({
        username, token, content
    });

    cheese = await cheese.save();
    res.render('EverythingButCheese', {user: username, comment: content});
});

app.post('/gangsubmit_comment', async (req, res) => {
    const username = req.session.username;
    const token = req.session.token
    let content = req.body.comment;
    console.log('Content:', content);

    let gang = await new Gang({
        username, token, content
    });

    gang = await gang.save();
    res.render('GangGangStore', {user: username, comment: content});
});

app.post('/Cafesubmit_comment', async (req, res) => {
    const username = req.session.username;
    const token = req.session.token
    let content = req.body.comment;
    console.log('Content:', content);

    let cafe = await new Cafe({
        username, token, content
    });

    cafe = await cafe.save();
    res.render('ObscureCafe', {user: username, comment: content});
});

app.post('/tahmeesubmit_comment', async (req, res) => {
    const username = req.session.username;
    const token = req.session.token
    let content = req.body.comment;
    console.log('Content:', content);

    let tahmee = await new Tahmee({
        username, token, content
    });

    tahmee = await tahmee.save();
    res.render('Tahmee', {user: username, comment: content});
});

//for login validation
function validate(req) {
  const schema = {
      username: Joi.string().required().trim(),
      password: Joi.required()
  };
  return Joi.validate(req, schema);
}


module.exports = app;

