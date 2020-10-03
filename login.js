const express = require('express')
const router = express.Router(); 
router.get('/',(req,res,next)=>{
    res.send('<form action="/login" method="POST"><div><label for="username">username</label><input type="text" name="username" id="username"></div><div><label for="password">Password</label><input type="password" name="password" id="password"></div><button class="btn" type="submit">Login</button></form>');
})
router.post('/',(req,res,next)=>{
    console.log(req.body);
    
})
module.exports =  router;