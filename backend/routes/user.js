const express = require('express')

const { signupUser, loginUser } = require('../Controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

module.exports = router