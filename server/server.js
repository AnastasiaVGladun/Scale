const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
<<<<<<< HEAD
const catchRoutes = require('./routes/catch')
const statRoutes = require('./routes/stat')
||||||| bea2251
=======
const catchRoutes = require('./routes/catchRoute')
>>>>>>> a6f6b14a244bd454e41731af40842a03358068bd

const server = express()
server.use(express.json())
server.use(express.static(path.join('server', 'public')))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', authRoutes)
<<<<<<< HEAD
server.use('api/v1/statistics', statRoutes)
server.use('api/v1/catch', catchRoutes)
||||||| bea2251
=======
server.use('/api/v1/catchs', catchRoutes)
>>>>>>> a6f6b14a244bd454e41731af40842a03358068bd

module.exports = server
