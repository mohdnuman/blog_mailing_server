const User = require("./models/user");

main=async()=>{
    const newUser=User({
        email:"me@mohdnuman.in"
    });
    await newUser.save();

}

main();