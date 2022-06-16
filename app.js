console.log("hello world");
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bookRouter = require('./routes/book-routes')

//middlewares
app.use(express.json())
app.use("/books" , bookRouter)

mongoose.connect("mongodb+srv://nicky:nicky_123@cluster0.milck.mongodb.net/bookStore?retryWrites=true&w=majority")
.then(()=>console.log("connected to the DB"))
.then(()=>{
    app.listen(5000)
}).catch((e)=>console.log(e));