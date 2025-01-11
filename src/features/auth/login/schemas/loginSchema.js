import Joi from "joi";

export const loginSchem = () => {
  return (t) => {
    if (typeof t !== "function") {
      throw new Error("Translation function must be provided to schema");
    }
    return Joi.object({
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
    });
  };
};
