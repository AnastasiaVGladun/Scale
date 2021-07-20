const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/diary')

const router = express.Router()

const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')
const { addAchievement } = require('../db/achievements')


// Amazon s3 config
const s3 = new AWS.S3()
AWS.config.update(
  {
    accessKeyId: 'AKIASMHVL5VSEXOU6XMC',
    secretAccessKey: '5Pobu56D7GtYEli45zg+UwrH/SRuMXyOWXq5jpB'
  })




const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'scalepenguin',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, 'images/' + file.originalname)
    }
  })
})


// Get catch by ID
router.get('/',getTokenDecoder(), (req, res) => {
  const userId = (req.user.id)

  return db.getAllCatchById(userId)
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})


// Add a Catch
router.post('/', getTokenDecoder(), (req, res) => {
  const userId = (req.user.id)
  return db.addCatch(req.body, userId)
  .then((fishcatch) => {
    res.json(fishcatch)
  })
  .then(() => {
    return addAchievement(userId)
  })
  .catch(err => {
    console.log(err.message)
  })
})


router.post('/upload', upload.single('fish_img'), function (req, res) {
  res.send(req.file.location)
})


module.exports = router