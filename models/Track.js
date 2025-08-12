const {Schema , model} = require('mongoose')

const trackSchema = new Schema ({
    title: {
        type: String,
        require: true
    },
    artist: {
        type: String,
        require: true
    }
})

const Track = model('Track' , trackSchema)

module.exports = Track