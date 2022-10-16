const {models: {Book}} = require('../models');
const fs = require("fs");

const getBooks = async (req, res) => {
    const books = await Book.findAll();
    res.status(200).json({"books": books});
}

const addBook = async (req, res) => {

    //get image, save image to directory, save image path to database
    const {title, price, image} = req.body;

    if(!title || !price || !image) return res.status(400).json({"message": "provide data"});

    const imagePath = "/";

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

}

const updateBook = async (req, res) => {

}

const getBook = async (req, res) => {

}

module.exports = {getBooks, addBook, deleteBook, updateBook, getBook};