const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword
  const regex = new RegExp(escapeRegex(keyword), 'gi')
  return Restaurant.find({ name: regex })
    .lean()
    .then((restaurants) => res.render('index', { restaurants, keyword }))
  function escapeRegex (text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
  }
})

module.exports = router
