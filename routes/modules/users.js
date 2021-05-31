const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('passport')
const bcrypt = require('bcryptjs')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const registerSuccess = `${name}會員註冊成功！`
  const errors = []

  if (!email || !password || !confirmPassword) {
    errors.push({ message: '請填寫信箱與密碼' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: '密碼與確認密碼不相符' })
  }

  User.findOne({ email })
    .then(user => {
      if (user) {
        errors.push({ message: '這個email已經註冊過了' })
        console.log('User already exits')
      }
      if (errors.length) {
        return res.render('register', {
          errors,
          name,
          email,
          password,
          confirmPassword
        })
      }
      bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => User.create({
          name,
          email,
          password: hash
        }))
        .then(() => res.render('login', { name, registerSuccess }))
        .catch(err => console.log(err))
    })
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}))

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '你己經成功登出')
  res.redirect('/users/login')
})

module.exports = router
