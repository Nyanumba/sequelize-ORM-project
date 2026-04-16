const router = require('express').Router();
const { Order, Product, Customer } = require('../models');

//create
router.post('/', async (req, res) => {
    const order = await Order.create({
        order_number: req.body.order_number,
        CustomerId: req.body.CustomerId,
        total_amount: 0
    });
    res.json(order);
});

// attach product to order
router.post('/add-product', async (req, res) => {
    const order = await Order.findByPk(req.body.orderId);
    const product = await Product.findByPk(req.body.productId);

    if (!order || !product) {
        return res.status(404).json({ message: 'Order or Product not found' });
    }

    await order.addProduct(product, {
        through: { quantity: req.body.quantity }
    });

    res.json({ message: 'Product added to order successfully' });
});

//read orders
router.get('/', async (req, res) => {
  const orders = await Order.findAll({
    include: [Customer, Product]
  });

  res.json(orders);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Order.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Deleted' });
});

module.exports = router;