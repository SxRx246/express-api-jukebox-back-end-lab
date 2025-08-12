const express = require('express')
const router = express.Router()

const trackController = require('../controllers/tracks')

router.post('/new' , trackController.createTrack)
router.get('/' , trackController.trackIndex)
router.get('/:id' , trackController.showTrack)

module.exports = router