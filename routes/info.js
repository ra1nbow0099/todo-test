const express = require('express')
const {getInfoPage} = require('../controllers/infoPage.controllers')
const router = express.Router()

//@route GET /info
//@desc get info page
router.get('/info', getInfoPage)

module.exports = router