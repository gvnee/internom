const {models: {Book}} = require('../models');
const path = require("path");
const multer = require("multer");

// const pathToImage = (book) => {
//     fs.readFile("./images/" + book.image, (err, data) => {
//         if(err) throw err;
//         book.image = data;
//     });
// }

const getBooks = async (req, res) => {
    const books = await Book.findAll();
    // books.forEach(pathToImage);
    res.status(200).json({books});
    // fs.readFile("../images/" + books.cover, (err, data) => {
    //     if(err) throw err;

    //     res.status(200).json({
    //         "title": books.title,
    //         "price": books.price,
    //         "cover": data
    //     });
    // })
}

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "../images")
//     },
//     filename: (req, file, cb) => {
//         // console.log("++++++++++++++",file);
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({storage: storage});
const upload = multer({dest: "images/"});


const addBook = async (req, res) => {

    //get image, save image to directory, save image path to database
    const {title, price} = req.body;

    console.log(req.body);
    console.log("ayoooo", req.file);

    if(!title || !price) return res.status(400).json({"message": "provide data"});

    const imagePath = "cover.jpeg";

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
    let {id, title, price, image} = req.body;

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