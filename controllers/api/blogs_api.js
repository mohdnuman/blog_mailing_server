const User=require("../../models/user");
const blogMailer=require("../../mailers/blog_mailer");
const queue=require('../../config/kue');
const blogEmailWorker=require('../../workers/blog_email_worker');


module.exports.new=async function(req,res){

    let {name,number}=req.query;
    
    let users=await User.find({});

    for(let i=0;i<users.length;i++){
        let blog={
            name:name,
            number:number,
            email:users[i].email
        }
        let job=queue.create('emails',blog).save(function(err){
            if(err){
                console.log("error occurred ")
                return;
            }
            console.log(job.id);
        });
    }
   
    return res.json(200,{
        message:"emails sent",
    })
}

