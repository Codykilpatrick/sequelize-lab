const { Make } = require("../models")

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

module.exports = {
  create,
  index,
  
}