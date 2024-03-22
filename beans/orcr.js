const Orcr = require('../models/Orcr')

const getOpeningClosingRanks = async(req, res) => {
    
    const data = await Orcr.find(req.body)

    res.json(data)

    // const body = req.body

    // // const data = body.split(':,')

    

    // const searchQuery = { $and: keywords.map(keyword => ({ $text: { $search: keyword } })) };
    //     // Perform search query based on multiple keywords
    //     const products = await Orcr.find(searchQuery);
    //     res.json(products);

}

module.exports = {getOpeningClosingRanks}