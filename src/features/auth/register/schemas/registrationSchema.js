import Joi from "joi";
import { CLIENT_TYPES } from "../constants";

export const registrationSchema = Joi.object({
  name: Joi.string().max(255).required().messages({
    "string.empty": "Name is required",
    "string.max": "Name must be less than 255 characters",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Valid email is required",
      "string.empty": "Email is required",
    }),
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.pattern.base":
        "Password must contain upper and lower case letters, numbers, and symbols",
    }),
  password_confirmation: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.only": "Passwords must match",
      "string.empty": "Password confirmation is required",
    }),
  mobile_country_code: Joi.string()
    .pattern(/^(\+|00)\d+$/)
    .required()
    .messages({
      "string.empty": "Code is required",
      "string.pattern.base":
        "Country code must start with '+' or '00' and include only numbers",
    }),

  mobile: Joi.string().required().messages({
    "string.empty": "Mobile number is required",
  }),
  client_type: Joi.string().valid(...Object.values(CLIENT_TYPES)),
  issuing_authority: Joi.when("client_type", {
    is: CLIENT_TYPES.B2B,
    then: Joi.string().required().messages({
      "string.empty": "Issuing authority is required for B2B clients",
    }),
  }),
  company_name: Joi.when("client_type", {
    is: CLIENT_TYPES.B2B,
    then: Joi.string().required().messages({
      "string.empty": "Company name is required for B2B clients",
    }),
  }),
  commercial_license_number: Joi.when("client_type", {
    is: CLIENT_TYPES.B2B,
    then: Joi.string().required().messages({
      "string.empty": "Commercial license number is required for B2B clients",
    }),
  }),
});
