// import restaurantList json and restaurant constructor
const Restaurant = require('../restaurant')
const restaurantList = require('./restaurant.json')

// setting mongodb
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('mongodb connected!')
  Restaurant.create(Object.assign(restaurantList.results, restaurantList))
  console.log('done')
})
