const router = require('express').Router()

const authServices = require('./auth.services')

// const postLogin = require('./auth.services')

router.post('/login', authServices.postLogin)

// router.post('/login', postLogin)

module.exports = router