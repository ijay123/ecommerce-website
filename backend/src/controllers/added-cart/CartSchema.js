import Joi from "joi";

export const createCartSchema = Joi.object({
  productName: Joi.string(),
  price: Joi.number(),
  desc: Joi.string(),
  total: Joi.number(),
  quantity: Joi.number().min(1),
  imageUrl: Joi.string(),
  userId: Joi.string().required(),
});
