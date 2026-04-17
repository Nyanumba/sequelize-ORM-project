module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        serial_number: DataTypes.INTEGER,
        price: DataTypes.FLOAT
    });
    return Product;
};