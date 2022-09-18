const nodemailer = require("../config/nodemailer");
const nodeMailer=require("../config/nodemailer");

exports.newBlog=(data)=>{

    console.log("newBlog mailer inside",data);
    let htmlString=nodemailer.renderTemplate({blog: data},'blogs/new_blog.ejs');

    nodeMailer.transporter.sendMail({
        from:"ethhodler@outlook.com",
        to:data.email,
        subject:"New Blog Published!",
        // html:'<h1>your new comment is added</h1>',
        html:htmlString,
    },
    (err,info)=>{
        if(err){
            console.log("errror occurred:",err);
            return;
        }
        console.log("message sent :",info);
        return;
    });
}