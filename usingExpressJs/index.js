const express = require("express");
const app = express();
let port = 8080;
app.listen(port, ()=>{
    console.log("listening.........");
});
//use function
// app.use((req,res) =>{
//     console.log("New Incoming request");
//     // res.send("This is a basic response");
//     res.send({
//         name:"apple",
//         color:"red",
//         shape:"round",
//         quality:"good",
//     });
// });
//get function=>routing
app.get("/banana",(req,res)=>{
    res.send({
        name:"banana",
        color:"yellow",
        quality:"good",
    });
});