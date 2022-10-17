const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

const {jwtAuth} = require('./middleware/JWT');


let corsOptions = {
    origin : ['http://etest.mn:5173'],
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./models");

(async () => {
    await db.sequelize.sync(
        // {alter: true}
    );
})();

app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));

// app.use(jwtAuth);
app.use('/book', require('./routes/book'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})