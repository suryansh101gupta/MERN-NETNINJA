const express = require('express')
const Routine = require('../models/routineSchema')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg: 'Get all routines'})
})

// GET a single routine
router.get('/:id', (req, res) => {
  res.json({mssg: 'GET a single routine'})
})

// POST a new routine
router.post('/', async (req, res) => {
    const { title, product, time} = req.body

    try{
        const routine = await Routine.create({title, product, time})
        res.status(200).json(routine)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

// DELETE a routine
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a routine'})
})

// UPDATE a routine
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a routine'})
})

module.exports = router