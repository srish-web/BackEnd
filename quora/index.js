const express = require("express");
const app = express(); //execute kia h express ko
const port = 8080;
const path = require("path");//path ko require krr lia
const { v4 : uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));//url encoded data ko express smj paega;
app.set("view engine", "ejs");//view engine ejs hoga
app.set("views", path.join(__dirname, "views"));//views ke lie path set krr lia
app.use(express.static(path.join(__dirname, "public")));//same views ke jesa hi
app.use(methodOverride('_method'));

let posts = [
    {
        id:uuidv4(),
        username:"xyz1",
        content:"content1"
    },
    {
        id:uuidv4(),
        username:"xyz2",
        content:"content2"
    },
    {
        id:uuidv4(),
        username:"xyz2",
        content:"content2"
    }
];
//post ke route se saare posts dekh skte hai
app.get("/posts", (req, res)=>{
    res.render("index.ejs", {posts});
    // res.send("server working well");
});

//new post ko create krne ke lie form ka route
app.get("/posts/new", (req, res)=>{
    res.render("form.ejs");
});
//jbb post submit hoga tbb ye call hoga
app.post("/posts", (req,res)=>{
    let {username, content} = req.body
    let id = uuidv4();
    posts.push({ id, username, content});
    res.redirect("/posts");//sends get req by default
})

//view route kisi ek post ki info milegi:id attach krenge isske lie ek
app.get("/posts/:id", (req, res)=>{
    let {id} = req.params
    // console.log(id);
    let post = posts.find((p) => id == p.id);
    res.render("show.ejs", {post});
});

//patch request se posts ko update krenge
app.patch("/posts/:id", (req, res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id == p.id);
    post.content = newContent;
    res.redirect("/posts");
    // console.log(id);
    // res.send("patch request working");
});
app.get("/posts/:id/edit", (req, res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id == p.id);
    res.render("edit.ejs", {post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log("listening...");
});