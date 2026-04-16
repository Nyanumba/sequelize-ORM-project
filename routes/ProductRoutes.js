const router = require('express').Router();
const { Product } = require('../models');

//create
router.post('/', async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

//read
router.get('/', async (req, res) =>{
    const products = await Product.findAll(req.body);
    res.json(products);
});

//update
router.put('/:id', async (req, res) => {
    await Product.update(req.body, {where: {id: req.params.id } });
    res.json({message: 'updated' });
});

//delete
router.delete('/:id', async (req, res) =>{
    await Product.destroy( {where: {id: req.params.id } });
    res.json({message: 'deleted'});
});

module.exports = router;