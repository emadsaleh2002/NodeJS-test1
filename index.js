const express=require("express");
const app=express();
app.use(express.json());

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/hi",(req,res)=>{
    res.send("i am hi");
});

app.get("/numbers",(req,res)=>{
   let number="0";
   for(let i = 1 ; i<=10 ; i++){
       number+= " - "+i;
   }
   res.send('the number is: '+number);
});

app.get("/sum/:number1/:number2",(req,res)=>{
    // console.log(req.params);
   let num1 = parseInt(req.params.number1);
   let num2 = parseInt(req.params.number2);
   let sum = num1 + num2;
   res.send("the sum is: "+sum);
});

app.get("/result",(req,res)=>{
    console.log(req.body);
    let name = req.body.name;
    let score = req.body.score;
    let age = req.query.age;
   res.send("the name is: "+name+" and your age is: "+age+" and the score is: "+score);
});

app.get("/welcome",(req,res)=>{
    res.send("i am Welcome");
});

app.post("/add1",(req,res)=>{
    res.send("i am Add 1");
});


app.listen(3000,()=>{
    console.log("I am ready now in port 3000");
});