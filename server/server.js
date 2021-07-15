const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const fishRoutes = require('./routes/fish')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/fish', fishRoutes)

module.exports = server
