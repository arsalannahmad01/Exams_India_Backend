const Orcr = require('../models/Orcr')
const { BadRequestError, NotFoundError } = require('../errors')

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


const getOptions = async(req, res) => {
    
    try {        
        
        const pipeline = buildPipeline(req)

        const data = await Orcr.aggregate(pipeline)
        if(!data) throw NotFoundError('Data not found')

        res.json({ success: true, message: "Options fetched successfully!", data });
    } catch (error) {
        console.log(error);
    }
}

const buildPipeline = (req) => {

    const { year, round, instituteType, instituteCode} = req.query;
    let pipeline = []

    if(year && round && instituteType && instituteCode) pipeline = [{$match: {year: parseInt(year), round: parseInt(round), instituteType, instituteCode}}, {$sort: {options: 1}}, {$group: {_id: {year:'$year', round: '$round', instituteType: '$instituteType', instituteCode: '$instituteCode'}, options: { $addToSet: { round: '$round', institute: '$institute', instituteType: '$instituteType', instituteCode: '$instituteCode', branch: "$branch" }}}}]
    else if(year && round && instituteType) pipeline = [{$match: {year: parseInt(year), round: parseInt(round), instituteType}}, {$sort: {options: 1}}, {$group: {_id: {year:'$year', round: '$round', instituteType: '$instituteType'}, options: { $addToSet: { round: '$round', institute: '$institute', instituteType: '$instituteType', instituteCode: '$instituteCode', }}}}]
    else if(year && round) pipeline = [{$match: { year: parseInt(year), round: parseInt(round)}}, {$sort: {options: 1}}, {$group: {_id: {year:'$year', round: '$round'}, options: { $addToSet: { round: '$round', instituteType: '$instituteType' }}}}]
    else if(year) pipeline = [{$match: {year: parseInt(year)}}, {$sort: {options: 1}}, {$group: {_id: '$year', options: { $addToSet: { round: '$round'}}}}]

    return pipeline;
}

module.exports = {
    getOpeningClosingRanks,
    getOptions
}
