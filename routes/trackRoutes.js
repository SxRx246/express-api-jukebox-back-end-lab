const express = require('express')
const router = express.Router()

const trackController = require('../controllers/tracks')

router.post('/new' , trackController.createTrack)
router.get('/' , trackController.trackIndex)
router.get('/:id' , trackController.showTrack)
router.put('/:id' , trackController.updateTrack)
router.delete('/:id' , trackController.deleteTrack)

module.exports = router