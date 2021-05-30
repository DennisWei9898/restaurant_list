// import module and model
const express = require('express')
const session = require('express-session')

const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const flash = require('connect-flash')

const port = 3000

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

const app = express()

const routes = require('./routes')

const usePassport = require('./config/passport')
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
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  next()
})

app.use(routes)

app.listen(port, () => {
  console.log(`This server is running on http://localhost:${port}`)
})
