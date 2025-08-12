const Track = require('../models/Track')

async function createTrack(req, res) {
    try {
        const createdTrack = await Track.create(req.body)
        res.status(201).json(createdTrack)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
async function trackIndex(req, res) {
    try {
        const allTracks = await Track.find()
        res.status(200).json(allTracks)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
async function showTrack(req, res) {
    try {
        const track = await Track.findById(req.params.id)
        res.status(200).json(track)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createTrack,
    trackIndex,
    showTrack
}