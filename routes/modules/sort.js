const express = require('express')
const Restaurant = require('../../models/restaurant')
const router = express.Router()

router.get('/sort', (req, res) => {
  // let re = /=/
  const sort = req.query.sort
  // collection = collection.replace('=', '')
  // const [type, sortMethod] = collection.split('-')
  // const sort = req.query.sort
  // // let collection = []
  // // if (sort)
  console.log(sort)
  Restaurant.find()
    .lean()
    .sort(sort)
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
}
)
module.exports = router
