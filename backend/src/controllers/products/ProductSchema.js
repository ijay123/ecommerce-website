import Joi from "joi";

export const createProductSchema = Joi.object({
  productName: Joi.string().required(),
  price: Joi.number().required(),
  desc: Joi.string(),
  discountPrice: Joi.number().optional(),
  percentDiscount: Joi.number().optional(),
  imageUrl: Joi.string(),
  categoryId: Joi.string(),
  userId: Joi.string(),
});

