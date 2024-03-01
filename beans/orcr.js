const Orcr = require('../models/Orcr')

const getOpeningClosingRanks = async(req, res) => {
    
    const data = await Orcr.find(req.body)

    res.json(data)

}

module.exports = {getOpeningClosingRanks}