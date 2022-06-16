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
    const {name , author , description , price , available} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available 
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

const getBookById = async (req,res,next)=>{
    let book;
    //const id = req.params.id;
    try{
        book = await Book.findById(req.params.id);
    }catch(e){
        console.log(e)
    }
    if(!book){
        return res.status(404).json({message:"No such book found"})
    }
    return res.status(200).json(book);
}



const updateBook = async(req,res,next) =>{
    const id = req.params.id;
    const {name , author , description , price , available} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available 
        })
        book = await book.save();
    }catch(e){
        console.log(e);
    }
    if(!book){
        return res.status(500).json({message:"unable to update"});
    }
    return res.status(201).json({book});
}

const deleteBook = async (req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
        book = await Book.findByIdAndRemove(id);
    }catch(e){
        console.log(e);
    }
    if(!book){
        return res.status(500).json({message:"unable to delete"});
    }
    return res.status(201).json({message:"Book successfully deleted.."});
}
module.exports = {getAllBooks , addBook , getBookById , updateBook , deleteBook}  ;