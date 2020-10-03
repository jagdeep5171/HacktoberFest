const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { prototype } = require('module');

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/login', require('./login.js'));
app.use('/signup', require('./signup.js'));
app.use('/', (req,res)=>{res.send('<html><a href="/login"><button>login</button></a><a href="/signup"><button>Signup</button></a></html>')})
app.use((req,res)=>{res.send("HELLO PLEASE ENTER A VALID URL")});
app.listen (3000||port.env);
