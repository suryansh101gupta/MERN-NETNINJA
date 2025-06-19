const express = require('express')

const {
  getRoutines,
  getRoutine,
  createRoutine,
  deleteRoutine,
  updateRoutine
} = require('../controllers/routineControllers')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/', getRoutines)

// GET a single routine
router.get('/:id', getRoutine)

// POST a new routine
router.post('/', createRoutine)

// DELETE a routine
router.delete('/:id', deleteRoutine)

// UPDATE a routine
router.patch('/:id', updateRoutine)

module.exports = router