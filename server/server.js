const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const statRoutes = require('./routes/stats')
const diaryRoutes = require('./routes/diaryRoutes')
const locationsRoutes = require('./routes/locations')
const achievementsRoutes = require('./routes/achievements')


const server = express()
server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/statistics', statRoutes)
server.use('/api/v1/diary', diaryRoutes)
server.use ('/api/v1/locations', locationsRoutes)
server.use ('/api/v1/diary/achievements', achievementsRoutes)

module.exports = server
