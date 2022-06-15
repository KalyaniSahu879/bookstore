const Book = require('../models/Book');

const getAllBooks = async (req,res,next)=>{
    let books ;
    try{
        books = await Book.find();
        //res.send(books);
    }catch(e){
        console.log(e)
    }
    if(!books){
        return res.status(404).json({message:"No Product found"})
    }
    return res.status(200).json({books})
}

const addBook = async(req,res,next) =>{
    const {name,author,description , price , availabie} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            availabie 
        });
        await book.save();
    }catch(e){
        console.log(e);
    }

    if(!book){
        return res.status(500).json({message:"unable to add"});
    }
    return res.status(201).json({book});
}

module.exports = getAllBooks;