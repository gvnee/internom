const {models: {Book}} = require('../models');

const books = async (req, res) => {
    res.status(200).json({"message": "books"});
}

module.exports = {books};