const jwt = require("jsonwebtoken");

const createAccessToken = (email) => {
    const accessToken = jwt.sign(
        {"email": email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "10min"}
);
    return accessToken;
}

const createRefreshToken = (email) => {
    const refreshToken = jwt.sign(
        {"email": email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: "1d"}
);
    return refreshToken;
}

const jwtAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if(!authHeader) return res.sendStatus(401);

    const accessToken = authHeader.split(" ", )[1];
    jwt.verify(accessToken,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) return res.sendStatus(403);
            req.email = decoded.email;
            next();
        }
    );
}

module.exports = {createAccessToken, createRefreshToken, jwtAuth};