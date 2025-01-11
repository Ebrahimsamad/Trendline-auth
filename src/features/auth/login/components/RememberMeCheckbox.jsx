import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const RememberMeCheckbox = ({ checked, onChange }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between mt-1">
      <div className="flex items-center">
        <input
          id="remember-me"
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
        />
        <label
          htmlFor="remember-me"
          className="ms-2 cursor-pointer block text-sm text-gray-700"
        >
          {t("login.email.remember_me")}
        </label>
      </div>
      <div className="text-sm">
        <Link
          to="/forgot-password"
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {t("login.email.forgot_password")}
        </Link>
      </div>
    </div>
  );
};
