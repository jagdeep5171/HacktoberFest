const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.send('<html><h1>SignUP</h1> <form action="/signup" method="POST"><div><label for="username">username</label><input type="text" name="username" id="username"></div><div><label for="password">Password</label><input type="password" name="password" id="password"></div><button class="btn" type="submit">Signup</button></form> </hmtl>')
});

router.post('/',(req,res)=>{
    res.send('will handle the post request to signup soon')
})
module.exports = router;