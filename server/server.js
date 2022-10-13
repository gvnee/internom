const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;


let corsOptions = {
    origin : ['http://etest.mn:5173'],
}

app.use(cors(corsOptions))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
const signup = require('./routes/signup');
const login = require('./routes/login');
const addBook = require('./routes/addBook');
const books = require('./routes/books');

const db = require("./models");

(async () => {
    await db.sequelize.sync();
})();

app.use('/signup', signup);
app.use('/login', login);
app.use('/books', books);
app.use('/addBook', addBook);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})