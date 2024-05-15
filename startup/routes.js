const express = require('express')
const home = require('../routes/home')
const error = require('../middleware/error')

module.exports = function (app) {
    //middleware
    app.set('view engine', 'pug')
    app.set('views', "./views")
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(express.static('public'))


    //routes
    app.use('/', home)

    //error
    app.use(error)
}

