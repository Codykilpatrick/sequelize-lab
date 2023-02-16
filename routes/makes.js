const router = require('express').Router()
const makesCtrl = require('../controllers/makes.js')

router.post('/', makesCtrl.create)

module.exports = router