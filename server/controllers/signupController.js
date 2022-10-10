const {models: {Customer}} = require('../models');

module.exports = {

    create: async (req, res) => {
    if(req.body.email && req.body.password){
        const {email: inputEmail,password: inputPassword} = req.body;
        
        const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'gm');
        
        const isValidEmail = emailRegex.test(inputEmail);

        if(!isValidEmail) res.send("invalid Email");
        else{
            const [customer, created] = await Customer.findOrCreate({
                where: {email: inputEmail},
                defaults: {
                    password: inputPassword
                }
            });

            if(created) res.send("account created");
            else res.send("account already exists");
        }
    }
    else res.send("input empty");
    }
}