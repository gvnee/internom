const express = require('express');
const app = express();
const port = 3000;

//routes
const signup = require('./routes/signup');

const db = require("./models");

(async () => {
    await db.sequelize.sync({ alter: true });
})();

app.use('/signup', signup);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})