const express = require("express");
const router = express.Router();
const {create} = require("../controllers/signupController");

router.post('/', create);

module.exports = router;