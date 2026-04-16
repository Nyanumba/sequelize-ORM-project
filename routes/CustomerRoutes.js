const router = require ('express').Router();
const { Customer, Order } = require('../models');

//Create
router.post('/', async (req, res) => {
    const customer = await Customer.create(req.body);
    res.json(customer);
});
//Read
router.get('/', async (req, res) => {
    const customers = await Customer.findAll(req.body);
    res.json(customers);
});

//Update
router.put('/:id', async (req, res) =>{
    await Customer.update(req.body, {where: { id: req.params.id }});
    res.json({message: 'Updated'});
});

//Delete
router.delete('/id', async (req, res) =>{
    await Customer.destroy({where: {id: req.params.id }});
    res.json({message: 'Deleted'});
});
module.exports = router;