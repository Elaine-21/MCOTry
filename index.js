const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Homepage = require('./routes/Homepage');
const Restolist = require('./routes/Restolist');
const Chicken = require('./routes/24Chicken');
const ObscureCafe = require('./routes/ObscureCafe');
const EverythingButCheese = require('./routes/EverythingButCheese');
const GangGangStore = require('./routes/GangGangStore');
const Tahmee = require('./routes/Tahmee');
const Store = require('./routes/Store');
const User = require('./routes/User');
const SearchResult = require('./routes/SearchResult');
require('dotenv').config();
require('./db/db');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

const staticPath = path.join(__dirname, './views');
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.use(cookieParser())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

app.use('/', Homepage);
app.use('/restolist', Restolist);
app.use('/store', Store);
app.use('/24Chicken', Chicken);
app.use('/ObscureCafe', ObscureCafe);
app.use('/EverythingButCheese', EverythingButCheese);
app.use('/GangGangStore', GangGangStore);
app.use('/Tahmee', Tahmee);
app.use('/User', User);
app.use('/SearchResult', SearchResult);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});