const { Superhero } = require('../../models')

const addSuperhero = async (req, res) => {
  const superhero = await Superhero.create({ ...req.body })
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result: superhero,
    },
  })
}

module.exports = addSuperhero
