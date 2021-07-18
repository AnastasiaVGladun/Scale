const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const fishRoutes = require('./routes/fish')
const rulesRoutes = require('./routes/rules')
const statRoutes = require('./routes/stats')
const diaryRoutes = require('./routes/diaryRoutes')
const locationsRoutes = require('./routes/locations')
const achievementsRoutes = require('./routes/achievements')
const methodRoutes = require('./routes/methods')



const server = express()
server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/fish-info', fishRoutes)
server.use('/api/v1/rules', rulesRoutes)
server.use('/api/v1/statistics', statRoutes)
server.use('/api/v1/diary', diaryRoutes)
server.use ('/api/v1/locations', locationsRoutes)
server.use ('/api/v1/diary/achievements', achievementsRoutes)
server.use ('/api/v1/methods', methodRoutes)


module.exports = server
