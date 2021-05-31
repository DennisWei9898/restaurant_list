// import express modules
const express = require('express')
const router = express.Router()

// import home and restaurant.js

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')
const search = require('./modules/search')
const users = require('./modules/users')
const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, restaurants)
router.use('/sort', sort)
router.use('/search', search)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router
