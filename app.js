// import module and model
const express = require('express')
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// setting database
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static files
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
// setting routing: root page
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// setting routing: new page
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

app.post('/restaurants', (req, res) => {
  const restaurantData = req.body
  return Restaurant.create({
    name: restaurantData.name,
    name_en: restaurantData.name_en,
    category: restaurantData.category,
    image: restaurantData.image,
    location: restaurantData.location,
    phone: restaurantData.phone,
    google_map: restaurantData.google_map,
    rating: restaurantData.name,
    description: restaurantData.description
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('detail', { restaurant })
      .catch(error => console.log(error))
    )
}
)

app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant })
      .catch(error => console.log(error))
    )
}
)

app.post('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  const restaurantData = req.body
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = restaurantData.name
      restaurant.name_en = restaurantData.name_en
      restaurant.category = restaurantData.category
      restaurant.image = restaurantData.image
      restaurant.location = restaurantData.location
      restaurant.phone = restaurantData.phone
      restaurant.google_map = restaurantData.google_map
      restaurant.rating = restaurantData.name
      restaurant.description = restaurantData.description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

app.post('/restaurants/:id/delete', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// app.get('/restaurants/search', (req, res) => {
//   const regex = new RegExp(escapeRegex(req.query.keyword), 'gi')
//   return Restaurant.find({ name: regex })
//     .lean()
//     .then(restaurants => res.render('index', { restaurants }))
//   function escapeRegex(text) {
//     return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\ $&");
//   };
// })

// start and listen express server

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})
