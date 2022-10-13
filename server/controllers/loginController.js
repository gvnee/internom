const {models: {Customer}} = require('../models');

const {createAccessToken, createRefreshToken} = require("../middleware/JWT");

const authorize = async (req, res) => {
    const {email: inMail,password: inPwd} = req.body;

    if(!inMail || !inPwd)
        return res.status(400).json({"message": "provide credentials"});

    const customer = await Customer.findOne({where: {email: inMail}});

    if(!customer)
        return res.status(401).json({"message": "email doesn't exist"});
        
    if(inPwd !== customer.password)
        return res.status(400).json({"message": "wrong password!"});

    const accessToken = createAccessToken(customer.email);
    const refreshToken = createRefreshToken(customer.email);

    await Customer.update({refreshToken: refreshToken}, {
        where: {
            email: inMail
        }
    });


    res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: 'None',
        // secure: true,
        maxAge: 60 * 60 * 24 * 1000,
    });

    res.json({accessToken});
}

module.exports = {authorize}