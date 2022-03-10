const { Superhero } = require('./superhero')
const { joiSchema } = require('./superhero')
const { joiUpdate } = require('./superhero')

module.exports = {
  Superhero,
  joiUpdate,
  joiSchema,
}
