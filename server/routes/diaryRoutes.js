const express = require('express')

const db = require('../db/diary')

const router = express.Router()

const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')


// Amazon s3 config
const s3 = new AWS.S3()
AWS.config.update(
  {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  })

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'lostnfoundeda',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, 'images/' + file.originalname)
    }
  })
})


// Get catch by ID
router.get('/:id', (req, res) => {
  const id = req.params.id 

  return db.getCatchById(id)
  .then((response) => {
    res.json(response)
  })
  .catch(err => {
    console.log(err.message)
  })
})

// Add a Catch
router.post('/', (req, res) => {
  return db.addCatch(req.body)
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