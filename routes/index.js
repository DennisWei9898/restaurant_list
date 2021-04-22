// import express modules
const express = require('express')
const router = express.Router()

// import home and restaurant.js

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const sort = require('./modules/sort')

router.use('/', home)
router.use('/restaurants', restaurants)
router.use('/sort', sort)

module.exports = router
