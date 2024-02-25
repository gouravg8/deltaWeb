import Joi from "joi";

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().min(0).default(0).required(),
    image: Joi.object({
      url: Joi.string().required(),
      filename: Joi.string().required(),
    }).required(),
  }).required(),
});

const reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().required(),
  }).required(),
});

const userReg = Joi.object({
  userReg: Joi.object({
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
  }).required(),
});

export default listingSchema;
export { reviewSchema, userReg };
