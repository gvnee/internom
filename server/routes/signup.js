const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const {customer} = require("../controllers");

router.use(bodyParser.json());

router.post('/', customer.create);

module.exports = router;