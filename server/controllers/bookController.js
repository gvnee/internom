const {models: {Book}} = require('../models');
const path = require("path");
const multer = require("multer");
const fs = require('fs');

const upload = multer({dest: "images/"});

const getBooks = async (req, res) => {
    const books = await Book.findAll();
    res.status(200).json({books});
}

const addBook = async (req, res) => {

    //get image, save image to directory, save image path to database
    const {title, price} = req.body;

    const image = req.file;

    
    if(!title || !price || !req.file) return res.status(400).json({"message": "provide data"});


    const fileType = image.mimetype.split("/")[1];
    const imagePath = image.filename + "." + fileType;

    fs.rename(`./images/${image.filename}`, `./images/${imagePath}`, (error) => {
        if(error) console.error(error);
    });

    try{
        const [book, created] = await Book.findOrCreate({
            where: {title: title},
            defaults: {
                price: price,
                image: imagePath
            }
        });

        if(!created) return res.status(400).json({"message": "book title already exists"});
        const createdBook = book.dataValues.title;
        res.status(201).json({"message": `${createdBook} created`});

    }
    catch(error){res.status(500).json({"message": error.message});}

}

const deleteBook = async (req, res) => {
    const {id} = req.params;
    const book = await Book.findByPk(id);
    if(!book) return res.status(400).json({"message": "book doesn't exist"});
    try{
        await book.destroy();
        res.status(200).json({"message": "book deleted"});
    }
    catch(error){res.status(400).json({"message": error.message});}
}

const updateBook = async (req, res) => {
    const {id} = req.params;
    let {title, price} = req.body;
    const image = req.file;

    if(!id) return res.status(400).json({"message": "provide data"});

    const book = await Book.findByPk(id);
    if(!book) return res.status(400).json({"message": "book doesn't exist"});
    
    if(!title && !price && !image) return res.status(400).json({"message": "provide data"});

    if(!title) title = book.title;
    if(!price) price = book.price;
    if(!image) image = book.image;

    const imagePath = "cover.jpeg";

    try{
        book.set({
            title: title,
            price: price,
            image: image
        });
        await book.save();
        res.status(200).json({"message": "updated"});
    }
    catch(error){res.status(500).json({"message": error.message});}
}

const getBook = async (req, res) => {
    const {id} = req.params;
    const book = await Book.findByPk(id);
    if(!book) return res.status(400).json({"message": "book doesn't exist"});
    res.status(200).json(book);
}

module.exports = {getBooks, addBook, deleteBook, updateBook, getBook, upload};