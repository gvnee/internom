const {models: {Customer}} = require('../models');

module.exports = {
    create: async (req, res) => {
        if(req.body.name && req.body.username && req.body.email && req.body.password){
            const {name, username, email, password} = req.body;

            await Customer.create({
                name, username, email, password
            });

            res.send("ye");
        }
        else{
            res.send("input empty");
        }
    }
}