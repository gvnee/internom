const {models: {Customer}} = require('../models');

const handleLogout = async (req, res) => {
    //on client also delete access token

    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(204);
    const refreshTKN = cookies.jwt;

    const user = await Customer.findOne({where: {refreshToken: refreshTKN}});
    if(!user){
        res.clearCookie("jwt", refreshTKN, {
            httpOnly: true,
            sameSite: 'None',
            secure: true
        });
        return res.sendStatus(204);
    }

    await user.update({refreshToken: null}, {
        where: {
            refreshToken: refreshTKN,
        }
    });

    res.clearCookie("jwt", refreshTKN, {
        httpOnly: true,
        sameSite: 'None',
        secure: true
    });
    res.sendStatus(204);

}

module.exports = {handleLogout}