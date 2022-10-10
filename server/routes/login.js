const express = require("express");
const router = express.Router();
const {login} = require("../controllers");

router.post('/', login.authorize);

module.exports = router;