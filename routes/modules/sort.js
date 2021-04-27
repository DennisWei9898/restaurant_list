const express = require('express')
const Restaurant = require('../../models/restaurant')
const router = express.Router()

router.get('/', (req, res) => {
  // let re = /=/
  const sort = req.query.sort
  const [sortType, sortMethod] = sort.split('-')
  console.log(sort)
  Restaurant.find()
    .lean()
    .sort({[sortType]:[sortMethod]})
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
}
)

module.exports = router
