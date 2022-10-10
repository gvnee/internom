const {sign, verify} = require("jsonwebtoken");

const createTokens = (customer) => {
    const accessToken = sign(
        {username: customer.username},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );
    return accessToken;
}

const cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    try{
        const username = jwt.verify(token, process.env.JWT_SECRET);
        req.username = username;
        next();
    }
    catch(err){
        res.clearCookie("token");
        return res.sendStatus(403)
    }
}

module.exports = {createTokens, cookieJwtAuth};