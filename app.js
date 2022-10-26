const express=require('express');
const hbs=require('hbs');
const path=require('path');
const app=express();
const port=4000;


const static_path=(path.join(__dirname,"/public"));
const template_path=path.join(__dirname,"/template/views")
const partial_path=path.join(__dirname,"/template/partials");
app.set('view engine','hbs');
app.set('views',template_path)
app.use(express.static(template_path));
hbs.registerPartials(partial_path);

app.get("",(req,res)=>{
    res.render('index');
})
app.get("/weather",(req,res)=>{
    res.render('weather');
})
app.get("/about",(req,res)=>{
    res.render('about');
})
app.get("*",(req,res)=>{
    res.render('404error');
})

// app.get("",(req,res)=>{
//    res.send("welcome to the home page");
// });

app.listen(4000,() =>{
    console.log(`listening to the port at ${port} `);
});
