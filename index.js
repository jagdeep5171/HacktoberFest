const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { prototype } = require('module');

app = express();
app.use('/login', require('./login.js'));
app.use((req,res)=>{res.send("HELLO")});
app.listen (3000||port.env);
