module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INT,
            allowNull: false
        }
    },
    {
        freezeTableName: true
    });
    return Book;
 };