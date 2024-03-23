const express = require('express')
const router = express.Router()


const {getOpeningClosingRanks, populateSearch} = require('../beans/orcr')

router.route('/getOrcr').get(getOpeningClosingRanks)

module.exports = router
