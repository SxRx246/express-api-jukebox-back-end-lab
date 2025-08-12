const express = require('express')
const router = express.Router()

const trackController = require('../controllers/tracks')

router.post('/new' , trackController.createTrack)

module.exports = router