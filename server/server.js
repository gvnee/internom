const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


//routes
const signup = require('./routes/signup');

const db = require("./models");

(async () => {
    await db.sequelize.sync();
})();

app.use(cors());
//{origin: 'http://localhost:5173'}

app.use('/signup', signup);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})