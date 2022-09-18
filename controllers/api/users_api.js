const User=require("../../models/user");



module.exports.new=async function(req,res){
    console.log(req.params.email);
    let user=await User.create({
        email:req.params.email
    });
   
    return res.json(200,{
        message:"new user created",
        user:user
    })
}

module.exports.test=async function(req,res){
   
    return res.json(200,{
        message:"test passed"
    })
}


