const {models: {Customer}} = require('../models');

const {createTokens} = require("./JWT");

module.exports = {
   authorize: async (req, res) => {
        if(req.body.email && req.body.password){
            const {email: inputEmail,password: inputPassword} = req.body;

            const customer = await Customer.findOne({where: {email: inputEmail}});
            if(customer === null){
                res.send("user doesn't exist");
            }
            else if(inputPassword === customer.password){
                const token = createTokens(Customer);

                res.cookie("token", token, {
                    maxAge: 60*30,
                    httpOnly: true
                });

                res.send(token);
            }
            else{
                res.send("wrong password!");
            }
        }
    }
}