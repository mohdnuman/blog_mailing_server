const express=require('express');
const router=express.Router();

const blogsApiController=require("../../controllers/api/blogs_api.js");

router.post('/new',blogsApiController.new);

module.exports=router;