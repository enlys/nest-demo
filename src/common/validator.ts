import Joi from 'joi';

export const createSchema = Joi.object({
  name: Joi.string().required().error(new Error('name为空')),
  age: Joi.number().required().error(new Error('age为空')),
  breed: Joi.string().required().error(new Error('breed为空')),
});
