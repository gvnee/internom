const express = require("express");
const router = express.Router();
const {books} = require("../controllers/bookController");

router.route("/")
    .get(books)
    // .post(jwtAuth)
    // .put(jwtAuth)
    // .delete(jwtAuth);

module.exports = router;