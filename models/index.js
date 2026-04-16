const { DataTypes } = require ('sequelize');
const sequelize = require('../config/db');

const Customer = require('./Customer')(sequelize, DataTypes);
const Product = require('./Product')(sequelize, DataTypes);
const Order = require('./Order')(sequelize, DataTypes);
const OrderItem = require('./OrderItem')(sequelize, DataTypes);

//one to many
Customer.hasMany(Order);
Order.belongsTo(Customer);

//many to many
Order.belongsToMany(Product, {through: OrderItem});
Product.belongsToMany(Order, {through: OrderItem});

module.exports = {
    sequelize, Customer, Product, Order, OrderItem
};