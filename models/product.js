module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        serial_number: DataTypes.STRING,
        price: DataTypes.FLOAT
    });
    return Product;
};