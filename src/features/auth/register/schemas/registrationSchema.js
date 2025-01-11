import Joi from "joi";
import { CLIENT_TYPES } from "../constants";

export const createRegistrationSchema = () => {
  return (t) => {
    if (typeof t !== "function") {
      throw new Error("Translation function must be provided to schema");
    }

    return Joi.object({
      name: Joi.string()
        .max(255)
        .required()
        .messages({
          "string.empty": t("validation.name_required"),
          "string.max": t("validation.name_max"),
        }),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
          "string.email": t("validation.email_valid"),
          "string.empty": t("validation.email_required"),
        }),
      password: Joi.string()
        .pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        )
        .required()
        .messages({
          "string.empty": t("validation.password_required"),
          "string.pattern.base": t("validation.password_pattern"),
        }),
      password_confirmation: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .messages({
          "any.only": t("validation.passwords_match"),
          "string.empty": t("validation.password_confirmation_required"),
        }),
      mobile_country_code: Joi.string()
        .pattern(/^(\+|00)\d+$/)
        .required()
        .messages({
          "string.empty": t("validation.code_required"),
          "string.pattern.base": t("validation.code_format"),
        }),
      mobile: Joi.string()
        .required()
        .messages({
          "string.empty": t("validation.mobile_required"),
        }),
      client_type: Joi.string().valid(...Object.values(CLIENT_TYPES)),
      issuing_authority: Joi.when("client_type", {
        is: CLIENT_TYPES.B2B,
        then: Joi.string()
          .required()
          .messages({
            "string.empty": t("validation.issuing_authority_required"),
          }),
      }),
      company_name: Joi.when("client_type", {
        is: CLIENT_TYPES.B2B,
        then: Joi.string()
          .required()
          .messages({
            "string.empty": t("validation.company_name_required"),
          }),
      }),
      commercial_license_number: Joi.when("client_type", {
        is: CLIENT_TYPES.B2B,
        then: Joi.string()
          .required()
          .messages({
            "string.empty": t("validation.commercial_license_required"),
          }),
      }),
    });
  };
};
