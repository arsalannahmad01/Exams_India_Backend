const mongoose = require('mongoose')

const OrcrSchema = new mongoose.Schema({
    Institute : {
        type:String,
        required: true,
    },
    "Academic Program Name" : {
        type: String,
        required: true
    },
    Quota : {
        type: String,
        required: true,
        enum : ['ALL', 'AI', 'OS', 'HS'],
        default: 'ALL'
    },
    "Seat Type" : {
        type: String,
        required: true,
        enum: ['ALL', 'SC', 'ST (PwD)', 'SC (PwD)', 'OPEN', 'OBC-NCL (PwD)', 'EWS (PwD)', 'OPEN (PwD)', 'ST', 'EWS', 'OBC-NCL'],
        default: 'ALL'
    },
    Gender : {
        type: String,
    },
    "Opening Rank" : {
        type: String,
        required: true
    },
    "Closing Rank" : {
        type: String,
        required: true
    },
    round: {
        type: Number,
        required: true
    },
    year : {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Orcr', OrcrSchema)

// {
//     _id: "65df0baaa1aac451b4d38076",
//     Institute : "Indian Institute  of Technology Bhubaneswar",
//     Academic Program Name: "Civil Engineering (4 Years, Bachelor of Technology)",
//     Quota: "AI",
//     Seat Type: "OPEN",
//     Gender: "NA",
//     Opening Rank: "3533",
//     Closing Rank: "5947",
//     round: 1,
//     year: 2016
// }