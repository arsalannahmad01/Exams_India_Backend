const Orcr = require('../models/Orcr')
const { BadRequestError } = require('../errors')

const getOpeningClosingRanks = async(req, res) => {
    try {
        // const { pageNumber = 1, pageSize = 50 } = req.query; TODO: implement later
        const { year, instituteCode } = req.query;

        // if (pageSize > 100) throw new BadRequestError("Page size can not exceed 100!");
        if (!year && !instituteCode) new BadRequestError("Please select a year or an institute!");

        const matchQuery = buildAggregateQuery(req);
        const data = await Orcr.find(matchQuery);
    
        res.json({ success: true, message: "Opening closing ranks fetched successfully!", data });
    } catch (err) {
        console.log({ message: "An error occured", stacktrace: err.stacktrace });
        throw err;
    }
}

const buildAggregateQuery = (req) => {
    const { round, seatType, year, branchCode, instituteCode } = req.query;

    let matchQuery = {};
    if (branchCode) matchQuery.branchCode = branchCode;
    if (instituteCode) matchQuery.instituteCode = instituteCode;
    if (year) matchQuery.year = parseInt(year);
    if (seatType) matchQuery.seatType = seatType;
    if (round) matchQuery.round = parseInt(round);

    return matchQuery;
}

module.exports = {
    getOpeningClosingRanks,
}
