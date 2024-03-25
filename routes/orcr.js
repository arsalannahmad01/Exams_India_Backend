const express = require('express')
const router = express.Router()


const {getOpeningClosingRanks, getOptions} = require('../beans/orcr')

router.route('/getOrcr').get(getOpeningClosingRanks)
router.route('/getOptions').get(getOptions)

module.exports = router
