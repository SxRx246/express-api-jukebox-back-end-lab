const Track = require('../models/Track')

async function createTrack(req, res) {
    console.log("You are in the create track controller")
    try {
        const createdTrack = await Track.create(req.body)
        res.status(201).json(createdTrack)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createTrack
}