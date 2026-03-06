const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));

main()
.then(()=>{
    console.log("connected to mongo");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mychat');
}
// let chat1 = new chat({
//     from:"neha",
//     to: "priya",
//     msg:"hello",
//     created_at: new Date()
// });
// chat1.save()
// .then((res)=>{
//     console.log(res);
// });

//index route
app.get("/chats", async (req,res)=>{
    let chats = await chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});
//new route
app.get("/chats/new", (req,res)=>{
   res.render("newChat.ejs")
});

//create route
app.post("/chats", (req,res)=>{
   let {from, to, msg} = req.body;
   let newChat = new chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
   });
   newChat.save()
    .then(res=>{console.log("chat saved")})
    .catch((err)=>{
        console.log(err);
    });
//    console.log(newChat);
   res.redirect("/chats");
});

app.get("/", (req, res)=>{
    res.send("Working!!");
});
app.listen(8080, ()=>{
    console.log("listening...");
});