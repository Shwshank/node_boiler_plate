const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const passport = require('passport');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const test_function = require('./api/test_function')

const userCollection = require('./model/user');
const api = require('./api/api');

mongoose.set('useCreateIndex', true);

app.use(passport.initialize());
app.use(passport.session());

const saltRounds = 8;

mongoose.connect('mongodb://127.0.0.1/test123', { useNewUrlParser: true });
const db = mongoose.connection;

//Check for connection
db.once('open',()=>{
  console.log('Connected to db');
  // test_function(userCollection, bcrypt, saltRounds);
})
app.use(bodyParser.json());
app.use(morgan('dev'))
api(app, userCollection, bcrypt, jwt, saltRounds)
app.listen(port, () => console.log(`Example app listening on port ${port}`))
