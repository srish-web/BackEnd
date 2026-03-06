const mongoose = require('mongoose');
const chat = require("./models/chat.js");
main()
.then(()=>{
    console.log("connected to mongo");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/mychat');
}

let allChats=[
    {
        from:"neha",
        to:"priti",
        msg:"Send me notes for the exam",
        created_at: new Date(),
    },
    {
        from:"priti",
        to:"neha",
        msg:"ok sending.",
        created_at: new Date(),
    },
    {
        from:"rohit",
        to:"mohit",
        msg:"bhai ye callback kya hota hai??",
        created_at: new Date(),
    },
    {
        from:"mohit",
        to:"rohit",
        msg:"javascript mai function argument mai pass krr skte hai ussi ko kehte hai",
        created_at: new Date(),
    },
    {
        from:"anita",
        to:"ramesh",
        msg:"bring me some fruits",
        created_at: new Date(),
    },
    {
        from:"tony",
        to:"peter",
        msg:"Bhai, bike le aa jldi",
        created_at: new Date(),
    },
];
chat.insertMany(allChats);


