const router = require('express').Router()
const makesCtrl = require('../controllers/makes.js')

router.post('/', makesCtrl.create)
router.get('/', makesCtrl.index)
router.put('/:id', makesCtrl.update)
router.delete('/:id', makesCtrl.delete)

router.post('/:id/cars', makesCtrl.addCar)

module.exports = router