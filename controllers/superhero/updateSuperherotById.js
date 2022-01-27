const { NotFound } = require('http-errors')

const { Superhero } = require('../../models')

const updateSuperherotById = async (req, res) => {
  const { id } = req.params
  const result = await Superhero.findByIdAndUpdate(id, req.body, {
    new: true,
  })
  if (!result) {
    throw new NotFound(`Superhero with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = updateSuperherotById
