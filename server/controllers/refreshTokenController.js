const {models: {Customer}} = require('../models');

const jwt = require("jsonwebtoken");

const {createAccessToken} = require("../middleware/JWT");

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(401);
    console.log("refresh", cookies.jwt);

    const refreshTKN = cookies.jwt;

    const user = await Customer.findOne({where: {refreshToken: refreshTKN}});
    if(!user) return res.sendStatus(403);

    jwt.verify(
        refreshTKN,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if(err || user.email !== decoded.email) return res.sendStatus(403);
            const accessToken = createAccessToken(decoded.email);
            res.json({accessToken});
        }
    )

}

module.exports = {handleRefreshToken}