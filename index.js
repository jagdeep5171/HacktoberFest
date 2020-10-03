const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { prototype } = require('module');

app = express();

const PORT = process.env.port || 3000;
app.listen (PORT);
