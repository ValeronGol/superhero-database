const { Schema, model } = require('mongoose')
const Joi = require('joi')

const superheroSchema = Schema(
  {
    nickname: {
      type: String,
    },
    real_name: {
      type: String,
    },
    origin_description: {
      type: String,
    },
    superpowers: {
      type: String,
    },
    catch_phrase: {
      type: String,
    },
    images: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
)

const Superhero = model('superhero', superheroSchema)

const joiSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  origin_description: Joi.string().required(),
  superpowers: Joi.string().required(),
  catch_phrase: Joi.string().required(),
  images: Joi.string().required(),
})

module.exports = {
  Superhero,
  joiSchema,
}
