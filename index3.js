
const express=require("express");
const mongoose = require("mongoose");
const Article = require("./Models/article");
const app=express();

app.use(express.json());

mongoose.connect("mongodb+srv://dremad2001:Emadner2002@cluster0.pjb89on.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});

// mongodb+srv://dremad2001:<db_password>@cluster0.pjb89on.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


app.post("/articles1",(req,res)=>{
    res.send("Article created");
    new Article({
        title: "My First Article",
        body: "This is the body of my first article.",
        numberOfLikes: 10
    }).save().then((article)=>{
        console.log("Article saved:", article);
    }).catch((err)=>{
        console.log("Error saving article:", err);
    });
});

app.post("/articles2",async(req,res)=>{
    try{
        const article=new Article(req.body);
        await article.save();
        res.status(201).send(article);
    }catch(err){
        res.status(400).send(err);
    }
    res.json(req.body);
});


app.get("/articles",async(req,res)=>{
    try{
        const articles=await Article.find({});
        res.status(200).send(articles);
        // res.json(articles);
    }catch(err){
        res.status(500).send(err);
    }
}); 

app.get("/articles/:id",async(req,res)=>{
    try{
        const article=await Article.findById(req.params.id);
        if(!article){
            return res.status(404).send("Article not found");
        }
        res.status(200).send(article);
    }catch(err){
        res.status(500).send(err);
    }
});

app.delete("/articles/:id",async(req,res)=>{
    try{
        const article=await Article.findByIdAndDelete(req.params.id);
        if(!article){
            return res.status(404).send("Article not found");
        }
        res.status(200).send("Article deleted"+article);
    }catch(err){
        res.status(500).send(err);
    }
});

app.listen(3000,()=>{
    console.log("I am ready now in port 3000");
});