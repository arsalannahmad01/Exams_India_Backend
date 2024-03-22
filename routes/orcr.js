const express = require('express')
const router = express.Router()


const {getOpeningClosingRanks} = require('../beans/orcr')

router.route('/get-orcr').post(getOpeningClosingRanks)

module.exports = router