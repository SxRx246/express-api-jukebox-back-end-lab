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
        if (allTracks.length)
            res.status(200).json(allTracks)
        else
            res.sendStatus(204)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
async function showTrack(req, res) {
    try {
        const track = await Track.findById(req.params.id)
        if (track)
            res.status(200).json(track)
        else
            res.sendStatus(404)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
async function updateTrack(req, res) {
    try {
        const track = await Track.findByIdAndUpdate(req.params.id, req.body, { new: true })
        
        if (track)
            res.status(200).json(track)
        else
            res.sendStatus(404)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}
async function deleteTrack(req, res) {
    try {
        const track = await Track.findByIdAndDelete(req.params.id)
        
        if (track)
            res.status(200).json(track)
        else
            res.sendStatus(404)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createTrack,
    trackIndex,
    showTrack,
    updateTrack,
    deleteTrack
}