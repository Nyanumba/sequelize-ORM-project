const express = require('express');
const app = express();

// Import Sequelize
const { sequelize } = require('./models');

// Middleware
app.use(express.json());

// Import Routes
const customerRoutes = require('./routes/customerRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Register Routes
app.use('/customers', customerRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Test Route (optional but useful)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Sync Database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});