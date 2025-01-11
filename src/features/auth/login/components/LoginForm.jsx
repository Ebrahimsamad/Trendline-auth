import { Link } from "react-router-dom";
import { FormLayout } from "./FormLayout";
import { PasswordInputField } from "./PasswordInputField";
import { RememberMeCheckbox } from "./RememberMeCheckbox";
import { LoginFooter } from "./LoginFooter";
import { useLogin } from "../hooks/useLogin";
import { LoadingSpinner } from "../../../../components/LoadingSpinner";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const {
    formData,
    error,
    showPassword,
    rememberMe,
    isLoading,
    setShowPassword,
    setRememberMe,
    handleChange,
    handleSubmit,
  } = useLogin();

  const { t, i18n } = useTranslation();
  return (
    <FormLayout>
      <div className="mx-auto w-full max-w-sm lg:w-96" dir={i18n.dir()}>
        <div className="text-center">
          <img
            src="/logo.webp"
            alt="Trend Line Marketing"
            className="mx-auto h-12 w-auto"
          />
        </div>

        <div className="mt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-start text-sm font-medium text-gray-700"
              >
                {t("login.email.label")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder={t("login.email.placeholder")}
              />
            </div>

            <PasswordInputField
              value={formData.password}
              onChange={handleChange}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            <RememberMeCheckbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <LoadingSpinner size={4} className="text-white me-2" />
                  <span>{t("login.signing_in")}</span>
                </div>
              ) : (
                t("login.sign_in")
              )}
            </button>

            <div className="text-sm text-center">
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                {t("login.register_prompt")}
              </Link>
            </div>
          </form>

          <LoginFooter />
        </div>
      </div>
    </FormLayout>
  );
};

export default LoginForm;
