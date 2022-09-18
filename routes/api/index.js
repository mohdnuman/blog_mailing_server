const express=require('express');
const router=express.Router();

router.use('/blogs',require("./blogs.js"));
router.use('/users',require("./users.js"));




module.exports=router;