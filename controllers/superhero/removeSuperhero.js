const { NotFound } = require('http-errors')

const { Superhero } = require('../../models')

const removeSuperhero = async (req, res) => {
  const { id } = req.params
  const result = await Superhero.findByIdAndRemove(id)
  if (!result) {
    throw new NotFound(`Superhero with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Superhero deleted',
    data: {
      result,
    },
  })
}

module.exports = removeSuperhero
