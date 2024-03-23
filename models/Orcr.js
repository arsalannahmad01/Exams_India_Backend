const mongoose = require('mongoose')

const OrcrSchema = new mongoose.Schema({
    institute : {
        type:String,
        required: true,
    },
    branch: {
        type: String,
        required: true
    },
    quota: {
        type: String,
        required: true,
        enum : ['ALL', 'AI', 'OS', 'HS'],
        default: 'ALL'
    },
    seatType: {
        type: String,
        required: true,
        enum: ['ALL', 'SC', 'ST (PwD)', 'SC (PwD)', 'OPEN', 'OBC-NCL (PwD)', 'EWS (PwD)', 'OPEN (PwD)', 'ST', 'EWS', 'OBC-NCL'],
        default: 'ALL'
    },
    gender: {
        type: String,
    },
    or: {
        type: String,
        required: true
    },
    cr: {
        type: String,
        required: true
    },
    round: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    branchCode: {
        type: String,
        required: true
    },
    instituteCode: {
        type: String,
        required: true
    },
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
