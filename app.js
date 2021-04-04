//import express

const express = require('express')
const restaurantList = require('./restaurant.json')

const app =express()
const exphbs = require('express-handlebars')
const port = 3000

// require express-handlebars



//setting template engine

app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

//setting static files

app.use(express.static('public'))
app.use(express.static('files'))

//set routing

app.get('/',(req,res)=>{

  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id',(req,res)=>{

  const restaurant = restaurantList.results.find(restaurant=>restaurant.id.toString()===req.params.restaurant_id)

  res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant=>{
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
    })
  res.render('index', { restaurants: restaurants ,keyword : keyword })
})

//start and listen express server

app.listen(port,()=>{

  console.log(`This server is running on http://localhost:${port}`)
} )