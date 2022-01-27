const { Superhero } = require('../../models')

const listSuperhero = async (req, res) => {
  const superhero = await Superhero.find({})
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: superhero,
    },
  })
}

module.exports = listSuperhero
