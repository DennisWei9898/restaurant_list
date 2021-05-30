// import module and model
const express = require('express')
const session = require('express-session')
const usePassport = require('./config/passport')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

const port = 3000

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()
usePassport(app)

const routes = require('./routes')
require('./config/mongoose')

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

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})
