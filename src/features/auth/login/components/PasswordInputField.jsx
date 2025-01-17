import { useTranslation } from "react-i18next";
import { Eye, EyeOff } from "lucide-react";

export const PasswordInputField = ({
  register,
  showPassword,
  onTogglePassword,
  error,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <label
        htmlFor="password"
        className="block text-start text-sm font-medium text-gray-700"
      >
        {t("login.email.password")}
      </label>
      <div className="mt-1 relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          placeholder="••••••••••••"
        />
        <button
          type="button"
          className="absolute inset-y-0 end-3 pr-3 flex items-center"
          onClick={onTogglePassword}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-400" />
          ) : (
            <Eye className="h-5 w-5 text-gray-400" />
          )}
        </button>
      </div>
      {error && (
        <p className="mt-1 text-start text-sm text-red-600">
          {t(error.message)}
        </p>
      )}
    </div>
  );
};
