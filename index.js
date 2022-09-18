const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const env=require('./config/environment');
const expressLayouts=require('express-ejs-layouts');

app.use(express.urlencoded());

app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes/index.js'));


app.listen(port,function(err){
    if(err){
        console.log(`error occured: ${err}`);
        return;
    }
    console.log(`express server is up and running on port: ${port}`);
})