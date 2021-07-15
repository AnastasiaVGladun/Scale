const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const catchRoutes = require('./routes/catch')
const statRoutes = require('./routes/stats')
const diaryRoutes = require('./routes/diaryRoutes')

const server = express()
server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/statistics', statRoutes)
server.use('/api/v1/catch', catchRoutes)
server.use('/api/v1/diary', diaryRoutes)

module.exports = server
