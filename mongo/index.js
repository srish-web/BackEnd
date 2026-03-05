const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("connection successful.");
})
.catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        uppercase:true
    },
    price:{
        type:Number,
        required:true,
        min:50,
        max:5000
    },
    author:{
        type:String,
        enum:["Justin", "Robert", "Karl", "Kathrene"],
    },
    Date:{
        type:Date,
        default:Date.now
    }

});
const book = mongoose.model("book", bookSchema);

const book1 = new book({
    title:"GoldenEve",
    price:300,
    author:"Justin",
});
// book.insertOne(book1);
book1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
