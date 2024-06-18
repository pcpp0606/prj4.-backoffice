import Joi from 'joi';
import { MESSAGES } from '../../constants/message.constant.js';
import { MIN_PASSWORD_LENGTH } from '../../constants/auth.constant.js';

const schema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.EMAIL.REQUIRED,
    'string.email': MESSAGES.AUTH.COMMON.EMAIL.INVALID_FORMAT,
  }),
  password: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD.REQUIRED,
  }),
  checkPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': MESSAGES.AUTH.COMMON.PASSWORD.NOT_MATCH,
    'any.required': MESSAGES.AUTH.COMMON.PASSWORD.REQUIRED,
  }),
  name: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.NAME.REQUIRED,
  }),
  nickname: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.NICKNAME.REQUIRED,
  }),
  phoneNumber: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.PHONE_NUMBER.REQUIRED,
  }),
  cityAddress: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.CITY_ADDRESS.REQUIRED,
  }),
  streetAddress: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.STREET_ADDRESS.REQUIRED,
  }),
  detailAddress: Joi.string().required().messages({
    'any.required': MESSAGES.AUTH.COMMON.DETAIL_ADDRESS.REQUIRED,
  }),
});

export const signUpValidator = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
