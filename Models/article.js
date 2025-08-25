const mongoose=require("mongoose");

const articleSchema=new mongoose.Schema({
    title:String,
    body:String,
    numberOfLikes:Number,
    // date:{
    //     type:Date,
    //     default:Date.now
    // }
});

const Article=mongoose.model("Article",articleSchema);

module.exports=Article;
