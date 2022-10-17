const express = require("express");
const router = express.Router();
const {getBooks, addBook, updateBook, deleteBook, getBook} = require("../controllers/bookController");

router.route("/")
    .get(getBooks)
    .post(addBook)


router.route("/:id")
    .get(getBook)
    .put(updateBook)
    .delete(deleteBook);

module.exports = router;