module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_amount: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  });

  return Order;
};