const express = require("express");
const router = express.Router();
const {getBooks, addBook, updateBook, deleteBook, getBook} = require("../controllers/bookController");

router.route("/")
    .get(getBooks)
    .post(addBook)
    .put(updateBook)
    .delete(deleteBook);

router.get("/:id", getBook);

module.exports = router;