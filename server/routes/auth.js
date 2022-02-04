const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const cors = require('cors')

const { userExists, getUserByUsername, createUser } = require('../db/users')

const router = express.Router()
router.use(cors())

applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsername,
  createUser
})

module.exports = router
