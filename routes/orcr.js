const express = require('express')
const router = express.Router()


const {getOpeningClosingRanks} = require('../beans/orcr')

router.route('/get-orcr').get(getOpeningClosingRanks)

module.exports = router