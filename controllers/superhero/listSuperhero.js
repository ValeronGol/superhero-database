const { Superhero } = require('../../models')

const listSuperhero = async (req, res) => {
  const { page = 1, limit = 5 } = req.query
  const skip = (page - 1) * limit
  const superhero = await Superhero.find({}, '', {
    skip,
    limit: Number(limit),
  })
  res.json({
    superhero,
  })
}

module.exports = listSuperhero
