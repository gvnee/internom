const express = require("express");
const router = express.Router();
const {authorize} = require("../controllers/loginController");

router.post('/', authorize);

module.exports = router;