import { Link } from "react-router-dom";
import { CLIENT_TYPES } from "../constants";
import { FormInput } from "./FormInput";
import { PasswordInput } from "./PasswordInput";
import { B2BFields } from "./B2BFields";
import { useRegistration } from "../hooks/useRegistration";
import { useTranslation } from "react-i18next";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    apiError,
    isSubmitting,
    clientType,
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
    onSubmit,
  } = useRegistration();

  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex" dir={i18n.dir()}>
      <div className="hidden lg:flex lg:w-1/2 bg-purple-50 items-center justify-center p-12">
        <div className="relative w-full max-w-lg">
          <div className="absolute top-0 -start-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -end-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 start-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <img
            src="/login-s.png"
            alt="Login illustration"
            className="relative"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center">
            <img
              src="/logo.webp"
              alt="Trend Line Marketing"
              className="mx-auto mt-8 h-12 w-auto"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {t("registration.title")}
            </h2>
          </div>

          <div className="mt-8">
            {apiError && (
              <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200">
                <p className="text-sm text-red-600">{apiError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormInput
                id="name"
                label={t("registration.name.label")}
                register={register}
                error={errors.name}
                placeholder={t("registration.name.placeholder")}
              />

              <FormInput
                id="email"
                label={t("registration.email.label")}
                type="email"
                register={register}
                error={errors.email}
                placeholder={t("registration.email.placeholder")}
              />

              <PasswordInput
                id="password"
                label={t("registration.password.label")}
                showPassword={showPassword}
                toggleShow={() => setShowPassword(!showPassword)}
                register={register}
                error={errors.password}
              />

              <PasswordInput
                id="password_confirmation"
                label={t("registration.password.confirm_label")}
                showPassword={showConfirmPassword}
                toggleShow={() => setShowConfirmPassword(!showConfirmPassword)}
                register={register}
                error={errors.password_confirmation}
              />

              <div className="flex items-center  gap-6">
                {/* Country Code */}
                <div className=" max-w-[100px]">
                  <FormInput
                    id="mobile_country_code"
                    label={t("registration.phone.country_code.label")}
                    register={register}
                    error={errors.mobile_country_code}
                    placeholder="+20"
                  />
                </div>

                {/* Mobile Number */}
                <div className="flex-grow">
                  <FormInput
                    id="mobile"
                    label={t("registration.phone.mobile.label")}
                    register={register}
                    error={errors.mobile}
                    placeholder="1234567890"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="client_type"
                  className="block text-start text-sm font-medium text-gray-700"
                >
                  {t("registration.client_type.label")}
                </label>
                <select
                  id="client_type"
                  {...register("client_type")}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.client_type ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 ${
                    i18n.language === "ar" ? "text-end" : "text-start"
                  }`}
                >
                  {Object.values(CLIENT_TYPES).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.client_type && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.client_type.message}
                  </p>
                )}
              </div>

              {clientType === CLIENT_TYPES.B2B && (
                <B2BFields register={register} errors={errors} />
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Register"}
                </button>
                {errors.general && (
                  <p className="mt-2 text-sm text-red-600 text-start">
                    {errors.general.message}
                  </p>
                )}
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              {t("registration.login_prompt")}{" "}
              <Link
                to="/login"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                {t("registration.login_link")}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
