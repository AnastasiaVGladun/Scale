const express = require('express')
const {getTokenDecoder} = require ('authenticare/server')

const db = require('../db/diary')

const router = express.Router()

const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')


// Amazon s3 config
const s3 = new AWS.S3()
console.log('ID:', process.env.AWS_ACCESS_KEY_ID)
console.log('KEY:', process.env.AWS_SECRET_ACCESS_KEY)
AWS.config.update(
  {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
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
  .catch(err => {
    console.log(err.message)
  })
})


router.post('/upload', upload.single('fish_img'), function (req, res) {
  res.send(req.file.location)
})


module.exports = router