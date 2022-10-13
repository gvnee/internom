const {sign, verify} = require("jsonwebtoken");

const createTokens = (customer) => {
    const token = sign(
        {username: customer.username},
        process.env.JWT_SECRET,
        {expiresIn: "10min"}
    );
    return token;
}

const jwtAuth = async (req, res, next) => {
    const token = req.cookies.token;
    try{
        const username = await jwt.verify(token, process.env.JWT_SECRET);
        req.username = username;
        next();
    }
    catch(err){
        res.clearCookie("token");
        return res.sendStatus(403)
    }
}

module.exports = {createTokens, jwtAuth};