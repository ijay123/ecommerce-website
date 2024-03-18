import Joi from "joi";

export const createUserSchema = Joi.object({
  FirstName: Joi.string().required(),
  LastName: Joi.string().required(),
  gender: Joi.string().valid("Female", "Male").required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),

  role: Joi.string().valid("regular", "admin").optional(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const getUserSchema = Joi.object({
  type: Joi.string().valid("ID", "EMAIL", "FIRSTNAME").required(),
  FirstName: Joi.string().optional(),
  email: Joi.string().optional(),
});
