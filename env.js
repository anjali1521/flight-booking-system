const Joi = require('joi');

const envSchema = Joi.object({
  MONGO_URI: Joi.string().required(),
  AMADEUS_API_KEY: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
}).unknown();

const { error } = envSchema.validate(process.env);
if (error) throw new Error(`Env validation error: ${error.message}`);