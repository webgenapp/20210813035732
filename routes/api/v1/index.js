const express = require('express')
const router = express.Router()

const meetingsRouter = require('./meetings')
router.use('/meetings', meetingsRouter)

const usersRouter = require('./users')
router.use('/users', usersRouter)

module.exports = router
