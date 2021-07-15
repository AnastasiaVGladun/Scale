const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const catchRoutes = require('./routes/catchRoute')

const server = express()
server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/catchs', catchRoutes)

module.exports = server
