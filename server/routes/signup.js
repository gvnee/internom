const express = require("express");
const router = express.Router();
const {signup} = require("../controllers");

router.post('/', signup.create);

module.exports = router;