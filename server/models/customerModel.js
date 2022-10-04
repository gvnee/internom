module.exports = (sequelize, DataTypes) => {
    //create Customer table
    const Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    },
    {
        freezeTableName: true
    });
    return Customer;
 };