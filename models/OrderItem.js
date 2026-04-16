module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
        quantity: DataTypes.INTEGER
    });
    return OrderItem;
};