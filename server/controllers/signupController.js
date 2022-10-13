const {models: {Customer}} = require('../models');

const create = async (req, res) => {
    const {email: inMail,password: inPwd} = req.body; 

    if(!inMail || !inPwd)
    return res.status(400).json({"message": "provide both email and password"});

    const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'gm');
    const passwordRegex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/);

    if(!emailRegex.test(inMail)) return res.status(400).json({"message": "invalid email"});
    if(!passwordRegex.test(inPwd)) return res.status(400).json({"message": "invalid password"});

    try {
        const [customer, created] = await Customer.findOrCreate({
            where: {email: inMail},
            defaults: {
                password: inPwd
            }
        });
        const createdEmail = customer.dataValues.email;
        if(created) return res.status(201).json({"message": `${createdEmail} created`});
        else return res.status(400).json({"message": "account already exists"});

    }
    catch(error){res.status(500).json({"message": error.message});}

}

module.exports = {create};