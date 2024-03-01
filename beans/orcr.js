const Orcr = require('../models/Orcr')

const getOpeningClosingRanks = async(req, res) => {

    const  {year, round } = req.body

    console.log(`Year: ${year}, Round: ${round}`);

    if(!year || !round )
        res.send('Please provide all the details!')

    const data = await Orcr.find({year, round})


    res.json(data)

}

module.exports = {getOpeningClosingRanks}