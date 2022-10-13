module.exports = (sequelize, DataTypes) => {

    const Customer = sequelize.define("Customer", {

        password: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        refreshToken: {
            type: DataTypes.STRING(250)
        }
    },
    {
        freezeTableName: true
    });
    return Customer;
 };