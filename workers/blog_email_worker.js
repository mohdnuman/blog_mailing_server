const queue=require('../config/kue');
const blogsMailer=require('../mailers/blog_mailer');

queue.process('emails',function(job,done){
    console.log("emails worker is processing a job",job.data);
    blogsMailer.newBlog(job.data);
    done();
});