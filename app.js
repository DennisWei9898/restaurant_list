// import module and model
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const port = 3000

const routes = require('./routes')
require('./config/mongoose')
const app = express()

// setting template engine
app.engine('hbs', exphbs(
  {
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
      eq: function (v1, v2) { return (v1 === v2) }
    }
  }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

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
