const express = require('express');

const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async (req, res, next) => {
    try {
        const aliens = await Alien.find()
        res.json(aliens)
    } catch (error) {
        res.send('Error occurred..' + error);
    }

})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const foundAlien = await Alien.find({name:id})
        res.json(foundAlien)
    } catch (error) {
        res.send('Error occurred.' + error)
    }

})

router.post('/', async (req, res, next) => {
    const alien = new Alien({
        name: req.body.name,
        powers: req.body.powers,
        place: req.body.place
    })

    try {
        const a1 = await alien.save()
        res.json(a1)
    } catch (error) {
        res.send('error occurred' + error)
    }
})

router.patch('/:id', async (req, res, next) => {
    const id = req.params.id
    try {
         const alien = await Alien.findById(id)
         alien.powers = req.body.powers
         const a1 = await alien.save()
         res.json(a1);
    } catch (error) {
        res.send('Error occurred' + error)
    }
})

module.exports = router