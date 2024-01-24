const mongoose = require("mongoose");

mongoose.set('strictQuery', false);


mongoose.connect("mongodb+srv://ramusiripalli2425:11502772@cluster0.e6o8ttl.mongodb.net/blogApplicationData").then(()=>{
    console.log("connected!");
}).catch((err)=>{
    console.log(err);
})