const { Make, Car } = require("../models")

const create = async (req, res) => {
  try {
    const make = await Make.create(req.body)
    res.status(200).json(make)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const makes = await Make.findAll()
    res.status(200).json(makes)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const make = await Make.update(
      req.body,
      { where: {id: req.params.id}, returning: true}
    )
    res.status(200).json(make)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteMake = async (req, res) => {
  try {
    const numberOfRowsRemoved = await Make.destroy(
      {where: {id: req.params.id} }
    )
    res.status(200).json(numberOfRowsRemoved)
  } catch (error) {
    res.status(500).json(error)
  }
}

const addCar = async (req, res) => {
  try {
    req.body.makeId = req.params.id
    const car = await Car.create(req.body)
    res.status(200).json(car)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteMake,
  addCar
}