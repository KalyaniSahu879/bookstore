const express = require('express');
const router = express.Router();
const {getAllBooks , addBook , getBookById, updateBook , deleteBook} = require('../controllers/books-controller')


router.get("/" , getAllBooks);
router.post("/" , addBook);
router.get("/:id" , getBookById);
router.put("/:id" , updateBook );
router.delete("/:id" , deleteBook );
module.exports = router;