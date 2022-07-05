//DATA TRANSFER OBJECT
const Joi = require('joi');

const id = Joi.string().guid();
const name = Joi.string().min(3).max(50);
const age = Joi.number().min(18);
const email = Joi.string().email();
// const phone = Joi.number().integer();
const phone = Joi.string();

const getUserSchema = Joi.object({
  id: id.required(),
})

const createUserSchema = Joi.object({
  name: name.required(),
  age: age.required(),
  email: email.required(),
  phone: phone.required(),
})

const updateUserSchema = Joi.object({
  name: name,
  age: age,
  email: email,
  phone: phone,
})


const deleteUserSchema = Joi.object({
  id: id.required(),
})

module.exports = {
  dtoGetUser:getUserSchema,
  dtoCreateUser:createUserSchema,
  dtoUpdateUser:updateUserSchema,
  dtoDeleteUser:deleteUserSchema
}


