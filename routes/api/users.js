const express=require('express');
const router=express.Router();

const usersApiController=require("../../controllers/api/users_api.js");

router.post('/new/:email',usersApiController.new);
router.post('/test',usersApiController.test);


module.exports=router;