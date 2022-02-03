const { Superhero } = require('../../models')

const listSuperhero = async (req, res) => {
  const { page = 1, limit = 5 } = req.query
  const skip = (page - 1) * limit
  const result = await Superhero.find({}, '', {
    skip,
    limit: Number(limit),
  })
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = listSuperhero
